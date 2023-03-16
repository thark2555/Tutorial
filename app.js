const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbConfig = require("./Config/dbConfig");
dotenv.config({ path: ".env" });

const publicDirectory = path.join(__dirname, "/public");
app.use(express.static(publicDirectory));
//parse url-encoded body (as sent by HTML form)
app.use(express.urlencoded({ extended: false }));
//parse  JSON body (as sent by API client)
app.use(express.json());
app.set("view engine", "ejs");

//Define Router
app.use("/", require("./Routes/pages"));
app.use("/auth", require("./Routes/auth"));
//set app port
const POST = process.env.POST;
app.listen(POST, () => {
  console.log(`Server start on port ${POST}`);
});
