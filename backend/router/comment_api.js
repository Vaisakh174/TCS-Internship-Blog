
const express = require("express");
const router = express.Router();
const DB = require("../schema/blog_Schema.js");
const verify = require('../tokenVerifier')


//for new post
router.post('/new', verify.verifytoken, async (req, res) => {
    try {
        let item = {

            content: req.body.content,
            user_name: req.body.user_name,
            user_id: req.body.user_id,
            post_id: req.body.post_id,
        }

        const newdata = new DB.Comment(item);
        let list = await newdata.save();
        if (list) {
            console.log("New Comment saved successfully!");
            res.status(200).json({ status: 'Your Comment is Saved Successfully' });
        } else {
            console.log(`Data Saving Error Occured`);
            res.status(404).send('Data Saving Error Occured');
        }
    } catch (error) {
        console.log(`Error from new Comment save catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



//get all list (get) for data
router.get('/getall', verify.verifytoken, async (req, res) => {
    try {
        let list = await DB.Comment.find().sort({ "_id": -1 });
        if (list) {
            console.log(`Your Comments are Fetched Successfully`);
            res.status(200).json(list);
        } else {
            console.log(`No data found`);
            res.status(404).send('No data found');
        }
    } catch (error) {
        console.log(`Error from Comment getall catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



// fetch single data (get)
router.get('/getsingle/:id',  async (req, res) => {
    // console.log('Your Comment is Fetched Successfully',req.params);

    try {
        let id = req.params.id;
        let list = await DB.Comment.find({ post_id: id }).sort({ "_id": -1 })
        if (list) {
            console.log('Your Comment is Fetched Successfully');
            res.status(200).json(list)
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from Comment get with id catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// delete data
router.delete('/delete/:id', verify.verifytoken, async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.Comment.findByIdAndDelete(id)
        if (list) {
            console.log('Your Comment is Deleted Successfully');
            res.status(200).json({ status: 'Your Comment is Deleted Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from Comment delete catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// update data
router.put('/update', verify.verifytoken, async (req, res) => {
    try {
        let id = req.body._id;
        let item = {
            content: req.body.data.content
        }
        // console.log("incoming data from update", req.body);
        let list = await DB.Comment.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        )
        if (list) {
            console.log('Your Comment is Updated Successfully', item);
            res.status(200).json({ status: 'Your Comment is Updated Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`, item);
        }
    } catch (error) {
        console.log(`Error from Comment put catch:  ${error}`);
        res.status(500).send(error.message);
    }
});


module.exports = router;