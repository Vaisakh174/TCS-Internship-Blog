
const express = require("express");
const router = express.Router();
const DB = require("../schema/blog_Schema.js");
const bcrypt = require('bcrypt');


//adding category data
router.post('/new', async (req, res) => {
    try {
        let item = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password1,
            roles: 'admin'
        }
        let foundResults = await DB.Admin.findOne({ email: item.email })

        if (foundResults == null) {
            console.log("no matching email found");
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(item.password, salt);
            item.password = hashedPassword;
            //Create new user
            const newdata = new DB.Admin(item);
            const savedata = await newdata.save();
            console.log(`from post method, signup ${savedata}`);
            res.status(200).send({ status: 'Registration Successful' });
        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered");
        }

    } catch (error) {
        console.log(`error from post, signup method ${error}`);
    }

});


router.post('/approve', async (req, res) => {
    try {

        let item = await DB.User.findOne({ _id: req.body._id})
        console.log('sss', item)
        if(item){

        
        let foundResults = await DB.Admin.findOne({ email: item.email })

        if (foundResults == null) {
            console.log("no matching email found");
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(item.password, salt);
            item.password = hashedPassword;
            //Create new user
            const newdata = new DB.Admin(item);
            const savedata = await newdata.save();
            console.log(`from post method, signup ${savedata}`);
            res.status(200).send({ status: 'Registration Successful' });
        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered As a User");
        }
    }
    else{
        res.status(401).send("User not found");
    }

    } catch (error) {
        console.log(`error from post, signup method ${error}`);
    }

});


//get all list (get) for data
router.get('/getall', async (req, res) => {
    try {
        let list = await DB.Admin.find().sort({ "_id": -1 });
        if (list) {
            console.log(`admin data are Fetched Successfully`,list);
            res.status(200).json(list);
        } else {
            console.log(`No data found`);
            res.status(404).send('No data found');
        }
    } catch (error) {
        console.log(`Error from admin getall catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



// fetch single data (get)
router.get('/getsingle/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.Admin.findById(id)
        if (list) {
            console.log('admin data is Fetched Successfully');
            res.status(200).json(list)
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from data get with id catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// delete data
router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.Admin.findByIdAndDelete(id)
        if (list) {
            console.log('Your admin is Deleted Successfully');
            res.status(200).json({ status: 'Your admin is Deleted Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from admin delete catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// update data
router.put('/update', async (req, res) => {
    try {
        let id = req.body._id;
        let item = {
            name: req.body.data.name,
            // email: req.body.data.email,
            password: req.body.data.password1
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(item.password, salt);
        item.password = hashedPassword;

        console.log("incoming data from update", id, item);

        let list = await DB.Admin.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        )
        if (list) {
            console.log('Your admin is Updated Successfully. ');
            res.status(200).json({ status: 'Your admin is Updated Successfully. ' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from admin put catch:  ${error}`);
        res.status(500).send(error.message);
    }
});
  

module.exports = router;

