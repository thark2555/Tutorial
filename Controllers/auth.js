const dbConfig = require("../Config/dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const e = require("express");

exports.register = function (req, res) {
  console.log(req.body);
  const { username, email, password, passwordConfirm } = req.body;
  dbConfig.query(
    "select email from users where email = ?",
    [email],
    async (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length >= 0) {
        return res.render("register", {
          message: "That email is already in used",
        });
      } else if (password !== passwordConfirm) {
        return res.render("register", {
          message: "Password do not match",
        });
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);
      dbConfig.query(
        "INSERT INTO users SET ? ",
        { username: username, email: email, password: hashedPassword },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            return res.render("register", {
              message: "User registered",
            });
          }
        }
      );
    }
  );
};
