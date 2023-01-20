const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const GMT00 = require("../convertGMT00toIST.js");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() }
});
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() }
});
const rootUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() }
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    user_id: String,
    user_name: String,
    category: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() },

});

const commentSchema = new mongoose.Schema({
    content: String,
    user_id: String,
    user_name: String,
    post_id: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() },

});

const categorySchema = new mongoose.Schema({
    category: String,
    date: { type: String, default: GMT00.getCurrentTimeInIST() }
});

const User = mongoose.model('User', userSchema);
const rootUser = mongoose.model('RootUser', rootUserSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = { User, Admin, rootUser, Post, Comment, Category };
