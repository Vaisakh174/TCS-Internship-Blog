
const express = require("express");
const router = express.Router();
const DB = require("../schema/blog_Schema.js");
const bcrypt = require('bcrypt');
const verify = require('../tokenVerifier')

//adding category data
router.post('/new', verify.verifytoken, async (req, res) => {
    try {
        let item = {
            category: req.body.category
        }
        const newdata = new DB.User(item);
        let list = await newdata.save();
        if (list) {
            console.log("New Category saved successfully!");
            res.status(200).send({ status: 'Category Saved Successfully' });
        } else {
            console.log(`Data Saving Error Occured`);
            res.status(404).send('Data Saving Error Occured');
        }
    } catch (error) {
        console.log(`Error from new Category save catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



//get all list (get) for data
router.get('/getall', verify.verifytoken, async (req, res) => {
    try {
        let list = await DB.User.find().sort({ "_id": -1 });
        if (list) {
            console.log(`Your Posts are Fetched Successfully`);
            res.status(200).json(list);
        } else {
            console.log(`No data found`);
            res.status(404).send('No data found');
        }
    } catch (error) {
        console.log(`Error from post getall catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



// fetch single data (get)
router.get('/getsingle/:id', verify.verifytoken, async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.User.findById(id)
        if (list) {
            console.log('Your Post is Fetched Successfully');
            res.status(200).json(list)
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from post get with id catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// delete data
router.delete('/delete/:id', verify.verifytoken, async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.User.findByIdAndDelete(id)
        if (list) {
            console.log('Your Post is Deleted Successfully');
            res.status(200).json({ status: 'Your Post is Deleted Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from post delete catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// update data
router.put('/update', verify.verifytoken, async (req, res) => {
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

        let list = await DB.User.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        )
        if (list) {
            console.log('Your user is Updated Successfully.');
            res.status(200).json({ status: 'User Data is Updated Successfully.' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from post put catch:  ${error}`);
        res.status(500).send(error.message);
    }
});


module.exports = router;

