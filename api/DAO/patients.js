const connection = require("../utils/connection");

module.exports.getAllPatients = connection.query(
  "CALL Get_All_Patients()",
  (err, rows) => {
    if (err) throw err;
    else {
      return rows;
    }
  }
);

module.exports.getAllAdmittedPatients = connection.query(
  "CALL Get_All_Patients_Admitted()",
  (err, rows) => {
    if (err) throw err;
    else {
      return rows;
    }
  }
);
