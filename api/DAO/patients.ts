const connection = require("../utils/connection");

module.exports.getAllPatients = () =>
  new Promise((resolve, reject) => {
    connection.query(
      "CALL Get_All_Patients()",
      (err: object, rows: object[]) => {
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

module.exports.createNewPatient = ({
  first_name,
  last_name,
  age,
  religion_id,
  bloodtype_id,
  phone_number,
  individual_tax_number,
  national_identification_number,
  email_address,
  residence_address,
  city_of_residence,
  post_code,
  conditions,
  currently_admitted,
}) =>
  new Promise((resolve, reject) => {
    connection.query(
      `CALL Create_New_Patient("${first_name}","${last_name}",${age},${
        religion_id ?? null
      },
      ${bloodtype_id},"${
        phone_number ?? null
      }","${individual_tax_number}","${national_identification_number}",
      "${
        email_address ?? null
      }","${residence_address}","${city_of_residence}","${post_code}","${
        conditions ?? null
      }",${currently_admitted})`,
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

module.exports.updatePatient = (
  { patientId },
  {
    first_name,
    last_name,
    age,
    religion_id,
    bloodtype_id,
    phone_number,
    individual_tax_number,
    national_identification_number,
    email_address,
    residence_address,
    city_of_residence,
    post_code,
    conditions,
    currently_admitted,
  }
) =>
  new Promise((resolve, reject) => {
    connection.query(
      `CALL update_patient(${patientId},"${first_name}","${last_name}",${age},${
        religion_id ?? null
      }, ${bloodtype_id},"${
        phone_number ?? null
      }","${individual_tax_number}","${national_identification_number}",
        "${
          email_address ?? null
        }","${residence_address}","${city_of_residence}","${post_code}","${
        conditions ?? null
      }",${currently_admitted})`,
      (err: object, rows: object[]) => {
        err ? reject(err) : resolve(rows);
      }
    );
  });

export {};
