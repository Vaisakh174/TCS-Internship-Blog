
const express = require("express");
const router = express.Router();
const DB = require("../schema/blog_Schema.js");



//adding category data
router.post('/new', async (req, res) => {
    try {
        let item = {
            category: req.body.category
        }
        const newdata = new DB.Category(item);
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
router.get('/getall', async (req, res) => {
    try {
        let list = await DB.Category.find().sort({ "_id": -1 });
        if (list) {
            console.log(`Your Categories are Fetched Successfully`);
            res.status(200).json(list);
        } else {
            console.log(`No data found`);
            res.status(404).send('No data found');
        }
    } catch (error) {
        console.log(`Error from Category getall catch: ${error.message}`);
        res.status(500).send(error.message);
    }
});



// fetch single data (get)
router.get('/getsingle/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.Category.findById(id)
        if (list) {
            console.log('Your Category is Fetched Successfully');
            res.status(200).json(list)
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from Category get with id catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// delete data
router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let list = await DB.Category.findByIdAndDelete(id)
        if (list) {
            console.log('Your Category is Deleted Successfully');
            res.status(200).json({ status: 'Your Category is Deleted Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from Category delete catch: ${error}`);
        res.status(500).send(error.message);
    }
});


// update data
router.put('/update', async (req, res) => {
    try {
        let id = req.body._id;
        let item = {
            Jobname: req.body.data.Jobname,
            CompanyName: req.body.data.CompanyName,
            Place: req.body.data.Place,
            Salary: req.body.data.Salary,
            JobType: req.body.data.JobType,
            Qualifications: req.body.data.Qualifications,
            JobDescription: req.body.data.JobDescription,
            Experience: req.body.data.Experience,
            Benefits: req.body.data.Benefits,
            Schedule: req.body.data.Schedule,
            Language: req.body.data.Language,
            Contact: req.body.data.Contact
        }
        // console.log("incoming data from update", req.body);
        let list = await DB.Category.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        )
        if (list) {
            console.log('Your Category is Updated Successfully');
            res.status(200).json({ status: 'Your Category is Updated Successfully' });
        } else {
            console.log(`No data found`);
            res.status(500).send(`No data found`);
        }
    } catch (error) {
        console.log(`Error from Category put catch:  ${error}`);
        res.status(500).send(err.message);
    }
});


module.exports = router;

