
const express = require("express");
const router = express.Router();
const DB = require("../schema/blog_Schema.js");
const verify = require('../tokenVerifier')


//for new post
router.post('/new', verify.verifytoken, async (req, res) => {
    try {
        let item = {
            title: req.body.title,
            content: req.body.content,
            user_name: req.body.user_name,
            user_id: req.body.user_id,
            category: req.body.category,
        }

        const newdata = new DB.Post(item);
        let list = await newdata.save();
        if (list) {
            console.log("New Post saved successfully!");
            res.status(200).json({ status: 'Your Post is Saved Successfully' });
        } else {
            console.log(`Data Saving Error Occured`);
            res.status(404).send('Data Saving Error Occured');
        }
    } catch (error) {
        console.log(`Error from new post save catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



//get all list (get) for data
router.get('/getall', async (req, res) => {
    try {
        let list = await DB.Post.find().sort({ "_id": -1 });
        if (list) {
            console.log('Your Posts are Fetched Successfully');
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

//get all  by category
router.get('/category/:category', verify.verifytoken, async (req, res) => {
    try {
        let list = await DB.Post.find({ category: req.params.category }).sort({ "_id": -1 });
        if (list.length > 0) {
            console.log('Your Posts are Fetched Successfully');
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


router.get('/search/:_id', verify.verifytoken, async (req, res) => {
    try {
        let list = await DB.Post.find({ user_id: req.params._id }).sort({ "_id": -1 });
        if (list.length > 0) {
            console.log('Your Posts are Fetched Successfully');
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
        let list = await DB.Post.findById(id)
        if (list) {
            console.log('Your Post is Fetched Successfully', id);
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
        let list = await DB.Post.findByIdAndDelete(id)
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
            title: req.body.data.title,
            content: req.body.data.content,
            user_id: req.body.data.user_id,
            user_name: req.body.data.user_name,
            category: req.body.data.category
        }
        // console.log("incoming data from update",item,id);
        let list = await DB.Post.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        )
        if (list) {
            console.log('Your Post is Updated Successfully');
            res.status(200).json({ status: 'Your Post is Updated Successfully' });
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