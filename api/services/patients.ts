import patientSchema from "../models/patient";

const {
  getAllPatients,
  getAllAdmittedPatients,
  getPatientById,
  createNewPatient,
  updatePatient,
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

exports.getPatientsByIdServ = async (params: any) => {
  try {
    const patientById = await getPatientById(params);
    console.log("Conditions :", params.conditions);
    return queryResponseDataSelection(patientById);
  } catch (err) {
    throw err;
  }
};

exports.createNewPatientServ = async (params: any) => {
  try {
    const { error, value } = patientSchema.validate(params);
    if (error) {
      return error.details;
    }
    const newPatient = await createNewPatient(value);
    return queryResponseDataSelection(newPatient);
  } catch (error) {
    throw error;
  }
};

exports.updatePatientServ = async (queryParams: any, bodyParams: any) => {
  try {
    const { error, value } = patientSchema.validate(bodyParams);
    if (error) {
      return error.details;
    }
    const patient = await updatePatient(queryParams, value);
    return queryResponseDataSelection(patient);
  } catch (error) {
    throw error;
  }
};
