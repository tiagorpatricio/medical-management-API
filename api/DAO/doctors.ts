const connection = require("../utils/connection");

module.exports.getAllDoctors = () =>
  new Promise((resolve, reject) => {
    connection.query(
      "CALL Get_All_Doctors()",
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

export {};
