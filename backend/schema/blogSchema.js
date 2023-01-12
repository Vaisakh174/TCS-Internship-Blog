const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 
const GMT00 = require("../convertGMT00toIST.js");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        admin: String,
        user: String,
        rootUser: String,
    },
    roles: [String],
    date: {type:String, default:  GMT00.getCurrentTimeInIST()}
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: {type:String, default:  GMT00.getCurrentTimeInIST()},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const commentSchema = new mongoose.Schema({
    content: String,
    date: {type:String, default:  GMT00.getCurrentTimeInIST()},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

const categorySchema = new mongoose.Schema({
    date: {type:String, default:  GMT00.getCurrentTimeInIST()},
    name: String
});

// // Ensure that only admin users can create, delete, and update categories
// categorySchema.pre('save', function (next) {
//     if (this.isNew || this.isModified) {
//         const user = this.constructor.model('User').findById(this.user);
//         if (user.role !== 'admin') {
//             return next(new Error('Only admin users can create, delete, or update categories'));
//         }
//     }
//     next();
// });

// categorySchema.pre('remove', function (next) {
//     const user = this.constructor.model('User').findById(this.user);
//     if (user.role !== 'admin') {
//         return next(new Error('Only admin users can create, delete, or update categories'));
//     }
//     next();
// });

// // Ensure that only authenticated users can create new posts
// postSchema.pre('save', function (next) {
//     if (this.isNew) {
//         const user = this.constructor.model('User').findById(this.user);
//         if (user.role !== 'authenticated') {
//             return next(new Error('Only authenticated users can create new posts'));
//         }
//     }
//     next();
// });

// // Ensure that users can only delete or update their own posts
// postSchema.pre('findOneAndUpdate', function (next) {
//     const user = this.constructor.model('User').findById(this._update.author);
//     if (user.role !== 'authenticated') {
//         return next(new Error('Only authenticated users can delete or update their own posts'));
//     }
//     next();
// });

// postSchema.pre('remove', function (next) {
//     const user = this.constructor.model('User').findById(this.author);
//     if (user.role !== 'authenticated') {
//         return next(new Error('Only authenticated users can delete or update their own posts'));
//     }
//     next();
// });

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = { User, Post, Comment, Category };
