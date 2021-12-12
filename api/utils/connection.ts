const mysql = require("mysql2");

const connection = () => {
  return mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DB,
  });
};

module.exports = connection();
