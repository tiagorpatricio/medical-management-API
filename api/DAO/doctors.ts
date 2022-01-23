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

module.exports.createNewDoctor = ({
  first_name,
  last_name,
  age,
  phone_number,
  email_address,
  residence_address,
  city_of_residence,
  post_code,
  specialty_id,
}) =>
  new Promise((resolve, reject) => {
    connection.query(
      `CALL Create_New_Doctor("${first_name}", "${last_name}", ${age}, 
      "${phone_number ?? null}", "${
        email_address ?? null
      }", "${residence_address}", "${city_of_residence}", 
      "${post_code}", ${specialty_id})`,
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

export {};
