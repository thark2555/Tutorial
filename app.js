const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbConfig = require("./Config/dbConfig");
dotenv.config({ path: ".env" });

//const users = [];
// app.use(express.urlencoded({ extended: false }));

// app.post("/register", async (req, res) => {
//   try {
//     const { password, username, email } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     users.push({
//       username: username,
//       email: email,
//       password: hashedPassword,
//     });
//     if (!password || !username || !email) {
//       console.log("Null");
//       res.send("Null");
//       return;
//     }
//   } catch (e) {
//     console.log(e);
//     res.redirect("./register");
//   }
// });
const publicDirectory = path.join(__dirname, "/public");
app.use(express.static(publicDirectory));
//parse url-encoded body (as sent by HTML form)
app.use(express.urlencoded({ extended: false }));
//parse  JSON body (as sent by API client)
app.use(express.json())
app.set("view engine", "ejs");

//Router
// app.get("/", function (req, res) {
//   res.render("../View/index.ejs");
// });
// app.get("/login", function (req, res) {
//   res.render("../View/login.ejs");
// });
// app.get("/register", function (req, res) {
//   res.render("../View/register.ejs");
// });

//Define Router
app.use("/", require("./Routes/pages"));
app.use("/auth", require("./Routes/auth"));
//set app port
const POST = process.env.POST;
app.listen(POST, () => {
  console.log(`Server start on port ${POST}`);
});
