
const express = require("express");
const router = express.Router();


// for api calls
router.use("/user", require("./login_and_register/user-api.js"));
router.use("/admin", require("./login_and_register/admin-api.js"));
router.use("/rootUser", require("./login_and_register/root-user-api.js"));







module.exports = router;