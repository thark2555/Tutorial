const mysql = require("mysql");
const dotenv = require("dotenv");

const dbConfig = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

dbConfig.connect(function (err) {
  if (err);
  {
    dbConfig.on("error", function (err) {
      console.log("[mysql error]", err);
    });
  }
  console.log("MySQL Connected...");
  // var sql =
  //   "CREATE TABLE customer(id INT AUTO_INCREMENT PRIMARY KEY, name NVARCHAR(50),address NVARCHAR(255))";
  // db.query(sql, function (error, result) {
  //   if (error) throw error;
  //   console.log("Table Created");
  // });
});

module.exports = dbConfig;
