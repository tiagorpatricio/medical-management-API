const {
  getAllPatients,
  getAllAdmittedPatients,
  getPatientById,
} = require("../DAO/patients");
const queryResponseDataSelection = require("../utils/queryResponseDataSelection.");

exports.getAllPatientsServ = async () => {
  try {
    const allPatients = await getAllPatients();
    return queryResponseDataSelection(allPatients);
  } catch (err) {
    throw err;
  }
};

exports.getAllAdmittedPatientsServ = async () => {
  try {
    const admittedPatients = await getAllAdmittedPatients();
    return queryResponseDataSelection(admittedPatients);
  } catch (err) {
    throw err;
  }
};

exports.getPatientsById = async (params: any) => {
  try {
    const patientById = await getPatientById(params);
    return queryResponseDataSelection(patientById);
  } catch (err) {
    throw err;
  }
};

export {};
