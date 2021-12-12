const connection = require("../utils/connection");

module.exports.getAllPatients = () =>
  new Promise((resolve, reject) => {
    connection.query(
      "CALL Get_All_Patients()",
      (err: object, rows: object[]) => {
        console.log(err ?? rows);
        err ? reject(err) : resolve(rows);
      }
    );
  });

module.exports.getAllAdmittedPatients = () =>
  new Promise((resolve, reject) => {
    connection.query(
      "CALL Get_All_Patients_Admitted()",
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

module.exports.getPatientById = ({ patientId }: { patientId: number }) =>
  new Promise((resolve, reject) => {
    connection.query(
      `CALL GET_Patients_By_Id(${patientId})`,
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

export {};
