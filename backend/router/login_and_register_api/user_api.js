const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const DB = require("../../schema/blog_Schema.js");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');



//signup
router.post('/register', async (req, res) => {
    try {
        //otp verification
        const otpFromDatabase = await DB.Otp.findOne({ email: req.body.email }).sort({ "_id": -1 });
        const isOtpExpired = (Date.now() - otpFromDatabase.timestamp) > (2 * 60 * 1000); // 2 minutes

        if (otpFromDatabase == null) {
            res.status(401).send({ status: 'OTP not found with your email ' });
        }
        else if (isOtpExpired) {
            // handle error: OTP is  expired
            // await DB.Otp.findByIdAndDelete(otpFromDatabase._id)
            res.status(401).send({ status: 'OTP is expired ' });
        }
        else if (otpFromDatabase.otp !== req.body.otp) {
            // handle error: OTP is  invalid
            res.status(401).send({ status: 'OTP is invalid' });
        } else {
            // handle success: OTP is valid and not expired
            // res.status(200).send({ status: 'OTP send Success' });



            let item = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password1,
                roles: 'user'
            }
            let foundResults = await DB.User.findOne({ email: item.email })

            if (foundResults == null) {
                console.log("no matching email found");
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(item.password, salt);
                item.password = hashedPassword;
                //Create new user
                const newdata = new DB.User(item);
                const savedata = await newdata.save();
                console.log(`from post method, signup ${savedata}`);

                //delete otp from db
                await DB.Otp.findByIdAndDelete(otpFromDatabase._id)


                res.status(200).send({ status: 'Registration Successful' });
            }
            else {
                console.log("matching email found");
                res.status(401).send({ status: "Email already registered As a User" });
            }
        }
    } catch (error) {
        console.log(`error from post, signup method ${error}`);
    }

});



//login
router.post("/login", async (req, res) => {
    try {
        let emailf = req.body.email;
        let passwordf = req.body.password;
        console.log(emailf, passwordf);

        let foundResults = await DB.User.findOne({ email: emailf })

        console.log("found,err : ", foundResults)
        if (foundResults == null) {
            console.log("error 401 invalid email")
            res.status(401).send("Email Not Found");
        }
        else {
            const isMatch = bcrypt.compareSync(passwordf, foundResults.password);
            if (isMatch) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let user_id = foundResults._id;
                let user_name = foundResults.name;
                let roles = foundResults.roles;
                res.status(200).send({ token, user_id, user_name, roles, status: 'Login Success' });
            }
            else {
                console.log("error 401 invalid password")
                res.status(401).send("invalid password");
            }
        }
    } catch (error) {
        console.log("error try login ", error)
    }

});


//otp verify
router.post("/verify", async (req, res) => {
    try {

        //otp verification
        const otpFromDatabase = await DB.Otp.findOne({ email: req.body.email }).sort({ "_id": -1 });
        const isOtpExpired = (Date.now() - otpFromDatabase.timestamp) > (2 * 60 * 1000); // 2 minutes

        if (otpFromDatabase == null) {
            res.status(401).send({ status: 'OTP not found with your email ' });
        }
        else if (isOtpExpired) {
            // handle error: OTP is  expired
            console.log('isOtpExpired: ', isOtpExpired)
            res.status(401).send({ status: 'OTP is expired ' });
        }
        else if (otpFromDatabase.otp !== req.body.otp) {
            // handle error: OTP is  invalid
            res.status(401).send({ status: 'OTP is invalid' });
        } else {
            // handle success: OTP is valid and not expired
            res.status(200).send({ status: 'OTP is verified' });
        }
    } catch (error) {
        console.log("error try otp verify ", error)
    }

});



//otp generation and send  to email,DB
router.post("/otp", async (req, res) => {
    try {
        //new otp gen...
        const otpObject = {
            email: req.body.email,
            otp: randomstring.generate({
                length: 6,
                charset: 'numeric'
            }),
            timestamp: Date.now()

        };
        // console.log(otpObject)
        // check email already in db or not
        let foundResults = await DB.Otp.findOne({ email: req.body.email }).sort({ "_id": -1 });
        console.log("foundresults : ", foundResults)
        if (foundResults == null) {
            console.log("email not found")

            //save otp to DB
            const newdata = new DB.Otp(otpObject);
            const savedata = await newdata.save();
            console.log(`from post method, OTP: ${savedata}`);
            // res.status(200).send({ status: 'OTP send Success' });

        }
        else {
            //update new otp to db
            await DB.Otp.findByIdAndUpdate(
                { "_id": foundResults._id },
                { $set: otpObject }
            )

        }

        //send otp email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.emailPassword
            }
        });
        const mailOptions = {
            from: process.env.email,
            to: req.body.email,
            subject: 'OTP for email verification',
            // text: `Your OTP is ${otpObject.otp} `,
            html: `<h1> Your OTP is: <i> ${otpObject.otp} </i></h1>
             <br><br><br>
              <h3>(Please note, you have only 2 minutes to verify your OTP)</h3>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(401).send({ status: 'OTP send Failed' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send({ status: 'OTP is send To Your Mail' });
            }
        });

    }
    catch (error) {
        console.log("error try otp generation ", error)
    }

});

//forgot password
router.post("/forgot", async (req, res) => {
    try {

        //check email is registered or not
        const isEmailRegistered = await DB.User.findOne({ email: req.body.email }).sort({ "_id": -1 });

        if (isEmailRegistered == null) {
            //email not found
            res.status(401).send({ status: 'You Are Not Rgistered User. Please Verify Your Email ' });
        }
        else {
            //email found

            //send password reset email
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.email,
                    pass: process.env.emailPassword
                }
            });
            const mailOptions = {
                from: process.env.email,
                to: req.body.email,
                subject: 'Password Resetting Link',
                html: `<h1> Your Link For Password Recovery is below: </h1> 
             <br>
             <a href="https://cute-gray-trout-kilt.cyclic.app/forgot/${isEmailRegistered._id}">Click Here To Reset Password</a>`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(401).send({ status: 'Email send Failed. Please Try Again' });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(200).send({ status: 'Password Resetting Link Is Send To Your Email. Please Check' });
                }
            });

        }
    } catch (error) {
        console.log("error try forgot password ", error)
    }

});

//email verify
router.get("/getEmail/:_id", async (req, res) => {
    try {
        // console.log('id: ',req.params)
        const data = await DB.User.findById(req.params._id).sort({ "_id": -1 });

        if (data == null) {
            res.status(401).send({ status: 'Email not found. Check Your Link' });
        }
        else {
            // handle success: OTP is valid and not expired
            res.status(200).send({ email: data.email });
        }
    } catch (error) {
        console.log("error try email verify ", error)
        res.status(401).send({ status: 'Error With Your Link. Check Your Link' });
    }

});

//update Password
router.put("/updatePassword", async (req, res) => {
    try {
        // console.log('update pass: ', req.body)
        item = { password: req.body.password }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(item.password, salt);
        item.password = hashedPassword;
        let update = await DB.User.findByIdAndUpdate(
            { "_id": req.body._id },
            { $set: item }
        )
        if (update) {
            console.log('Password Updated Successfully. ');
            res.status(200).json({ status: 'Your Password Updated Successfully.' });
        } else {
            console.log(`error from password update`);
            res.status(500).send({ status: `Error At Password Update` });
        }

    } catch (error) {
        console.log("error try update password ", error)
    }

});

module.exports = router;