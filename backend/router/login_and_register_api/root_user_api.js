const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const DB = require("../../schema/blog_Schema.js");
const bcrypt = require('bcrypt');



//signup
router.post('/register', async (req, res) => {
    try {
        let item = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password1,
            roles: 'root_user'
        }
        let foundResults = await DB.rootUser.findOne({ email: item.email })

        if (foundResults == null) {
            console.log("no matching email found");
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(item.password, salt);
            item.password = hashedPassword;
            //Create new user
            const newdata = new DB.rootUser(item);
            const savedata = await newdata.save();
            console.log(`from post method, signup ${savedata}`);
            res.status(200).send({ status: 'Registration Successful' });
        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered As a User");
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

        let foundResults = await DB.rootUser.findOne({ email: emailf })

        console.log("found,err : ", foundResults)
        if (foundResults == null) {
            console.log("error 401 invalid email")
            res.status(401).send("Email Not Found");
        }
        else {
            const isMatch = bcrypt.compareSync(passwordf, foundResults.password);
            if(isMatch){
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let user_id = foundResults._id;
                let user_name = foundResults.name;
                let roles = foundResults.roles;
                res.status(200).send({ token, user_id, user_name, roles, status: 'Login Success' });
            }
            else{
                console.log("error 401 invalid password")
                res.status(401).send("invalid password");
            }
        }
    } catch (error) {
        console.log("error try login ", error)
    }

});



module.exports = router;