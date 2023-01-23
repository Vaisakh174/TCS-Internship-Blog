
const express = require("express");
const router = express.Router();


// for api calls

//for login apis
router.use("/user", require("./login_and_register_api/user_api"));
router.use("/admin", require("./login_and_register_api/admin_api"));
router.use("/rootUser", require("./login_and_register_api/root_user_api"));

//crud apis
router.use("/category", require("./category_api"));
router.use("/post", require("./post_api"));
router.use("/users", require("./user_api"));
router.use("/admins", require("./admin_api"));
router.use("/comment", require("./comment_api"));







module.exports = router;