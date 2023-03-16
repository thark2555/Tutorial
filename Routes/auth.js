const express = require("express");
const  authController= require('../Controllers/auth')
const router = express.Router();

router.post("/register", authController.register);


module.exports = router;
