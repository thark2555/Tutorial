const dbCon = require("../Config/dbConfig");
const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const checkpassword = function (req, data, res) {
    if (data.length > 0) {
      if ((data[0].password = password)) {
        res.json({
          status: 200,
          message: "Login sucess",
        });
      } else {
        res.json({
          status: 400,
          message: "password not match   ",
        });
      }
    }
  };

  const query = `select * from users where username = '${username}' and password ='${password}'`;
  await dbCon.query(query, async (error, data) => {
    try {
      if (data.length == 0) {
        res.json({
          status: 400,
          message: "User not exist",
        });
      }
      if (data.length > 0) {
        checkpassword(data, req.body, res);
      }
    } catch (error) {
      res.json({
        message: error,
      });
    }
  });
};
module.exports = { userLogin };
