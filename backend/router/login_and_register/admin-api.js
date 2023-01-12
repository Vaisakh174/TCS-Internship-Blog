const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const DB = require("../../schema/blogSchema.js");





//signup
// add data (post) for admin
router.post('/register', async (req, res) => {


    let item = {

        name: req.body.name,
        email: req.body.email,
        password: { admin: req.body.password },
        roles: ['admin']

    }


    let foundResults = await DB.User.findOne({ email: item.email })



    if (foundResults == null) {
        console.log("no matching email found");

        try {

            console.log('item= ', item)
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


        let isAdmin = foundResults.roles.some(function (element) {
            return element === 'admin';
        });

        if (isAdmin) {
            res.status(401).send("Email already registered As Admin");


        }

        else {

            console.log('res', foundResults.roles)
            foundResults.roles.push('admin')
            console.log('after', foundResults.roles)

            item = { ...item, password: { ...foundResults.password, admin: req.body.password } }  //concatinate user pass and admin pass

            // console.log('item=', item)
            DB.User.findByIdAndUpdate(
                { "_id": foundResults._id },
                { $set: { roles: foundResults.roles, password: item.password } }, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.status(404).send("Error while updating admin role");
                    } else {
                        console.log(result);
                        res.status(200).send({ status: "Email already registered. So Updating new Role As Admin" });
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
                var isAdmin = foundResults.roles.some(function (element) {
                    return element === 'admin';
                })
            }

            console.log("found,err : ", foundResults, err)

            if (foundResults == null) {
                console.log("error 401 invalid email")

                res.status(401).send("Email Not Found");
            }

            else if (!isAdmin) {


                res.status(401).send("invalid User. You Already Registered");

            }

            else if (foundResults.password.admin != passwordf) {
                console.log("error 401 invalid password")

                res.status(401).send("invalid password");

            }
            else if (foundResults.password.admin == passwordf) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let user = foundResults.name;
                let role = foundResults.role;
                res.status(200).send({ token, user, role, status: 'Login Success' });
            }
            else {
                res.status(401).send("Unknown Error Occured");
            }
        })

    } catch (error) {
        console.log("error try login ", error)

    }

});

module.exports = router;