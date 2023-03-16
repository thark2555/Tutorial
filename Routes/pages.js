const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("../View/index");
});
router.get("/register", function (req, res) {
  res.render("../View/register");
});
router.get("/login", function (req, res) {
  res.render("../View/login");
});

module.exports = router;
