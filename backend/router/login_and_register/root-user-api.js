const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const DB = require("../../schema/blogSchema.js");







//signup

router.post('/register', async (req, res) => {
    // const DateNow = Date.now();
    let item = {

        name: req.body.name,
        email: req.body.email,
        password: { rootUser: req.body.password },
        roles: ['rootUser']

    }


    let foundResults = await DB.User.findOne({ email: item.email })



    if (foundResults == null) {
        console.log("no matching email found");

        try {

            console.log(item)
            const newdata = new DB.User(item);
            const savedata = await newdata.save();
            console.log(`from post method, signup ${savedata}`);
            res.status(200).send({ status: 'Registration Successful' });



        } catch (error) {
            console.log(`error from post, signup method ${error}`);
        }


    }
    else {
        console.log("matching email found. so updating role");


        let isRootUser = foundResults.roles.some(function (element) {
            return element === 'rootUser';
        });

        if (isRootUser) {
            res.status(401).send("Email already registered As Root USer");


        }

        else {

            console.log('res', foundResults.roles)
            foundResults.roles.push('rootUser')
            console.log('after', foundResults.roles)

            item = { ...item, password: { ...foundResults.password, rootUser: req.body.password } }  //concatinate user pass and admin pass

            DB.User.findByIdAndUpdate(
                { "_id": foundResults._id },
                { $set: { roles: foundResults.roles, password: item.password } }, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.status(404).send("Error while updating Root USer role or Password");
                    } else {
                        console.log(result);
                        res.status(200).send({ status: "Email already registered. So Updating New Role As Root User" });
                    }
                });
        }


    }





});


//login
router.post("/login", async (req, res) => {

    let emailf = req.body.email;
    let passwordf = req.body.password;
    console.log(emailf, passwordf);

    try {

        DB.User.findOne({ email: emailf }, (err, foundResults) => {

            if (foundResults != null) {
                var isRootUser = foundResults.roles.some(function (element) {
                    return element === 'rootUser';
                })
            }

            console.log("found,err : ", foundResults, err)

            if (foundResults == null) {
                console.log("error 401 invalid email")

                res.status(401).send("Email Not Found");
            }

            else if (!isRootUser) {


                res.status(401).send("invalid Root User. You Already Registered");

            }
            else if (foundResults.password.rootUser != passwordf) {
                console.log("error 401 invalid password")

                res.status(401).send("invalid password");

            }

            else if (foundResults.password.rootUser == passwordf) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let user = foundResults.name;
                let role = foundResults.role;
                res.status(200).send({ token, user, role, status: 'Login Success' });
            } else {
                res.status(401).send("Unknown Error Occured");
            }
        })

    } catch (error) {
        console.log("error try login ", error)

    }

});

module.exports = router;