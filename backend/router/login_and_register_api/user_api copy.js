const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const DB = require("../../schema/blog_Schema.js");
const bcrypt = require('bcrypt');



//signup
// add data (post) for users
router.post('/register', async (req, res) => {
    // const DateNow = Date.now();
    let item = {

        name: req.body.name,
        email: req.body.email,
        password: req.body.password1 ,
        roles: 'user'
      
    }


    let foundResults = await DB.User.findOne({ email: item.email })



    if (foundResults == null) {
        console.log("no matching email found");

        try {

            const newdata = new DB.User(item);
            const savedata = await newdata.save();
            console.log(`from post method, signup ${savedata}`);
            res.status(200).send({ status: 'Registration Successful' });



        } catch (error) {
            console.log(`error from post, signup method ${error}`);
        }


    }
    else {
        console.log("matching email found");



        let isUser = foundResults.roles.some((element)=> {
            return element === 'user';
        });

        if (isUser) {
            res.status(401).send("Email already registered As a User");


        }

        else {

            console.log('res', foundResults.roles)
            foundResults.roles.push('user')
            console.log('after', foundResults.roles)

            item = { ...item, password: { ...foundResults.password, user: req.body.password1 } }  //concatinate user pass and admin pass

            DB.User.findByIdAndUpdate(
                { "_id": foundResults._id },
                { $set: { roles: foundResults.roles, password: item.password } },(err, result)=> {
                    if (err) {
                        console.log('err', err);
                        res.status(404).send("Error while updating user role");
                    } else {
                        console.log('res', result);
                        res.status(200).send({ status: "Email already registered. So Updated new Role As User" });
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
                var isUser = foundResults.roles.some((element)=>{
                    return element === 'user';
                })
            }

            console.log("found,err : ", foundResults, err)

            if (foundResults == null) {
                console.log("error 401 invalid email")

                res.status(401).send("Email Not Found");
            }

            else if (!isUser) {


                res.status(401).send("invalid User. You Already Registered");

            } else if (foundResults.password.user != passwordf) {
                console.log("error 401 invalid password")

                res.status(401).send("invalid password");

            }

            else if (foundResults.password.user == passwordf) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let user_id = foundResults._id;
                let user_name = foundResults.name;
                let roles = foundResults.roles;
                res.status(200).send({ token, user_id,user_name, roles, status: 'Login Success' });
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