const connection = require("../utils/connection");

module.exports.getAllPatients = () =>
    new Promise((resolve, reject) => {
        connection.query("CALL Get_All_Patients()", (err, rows) => {
            err ? reject(err) : resolve(rows);
        });
    });

module.exports.getAllAdmittedPatients = () =>
    new Promise((resolve, reject) => {
        connection.connect();
        connection.query("CALL Get_All_Patients_Admitted()", (err, rows) => {
            err ? reject(err) : resolve(rows);
        });
        connection.end();
    });

module.exports.getPatientById = ({ patientId }) =>
    new Promise((resolve, reject) => {
        connection.connect();
        connection.query(`CALL GET_Patients_By_Id(${patientId})`, (err, rows) => {
            err ? reject(err) : resolve(rows);
        });
        connection.end();
    });
