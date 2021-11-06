const patientsDAO = require("../DAO/patients");
const queryResponseDataSelection = require("../utils/queryResponseDataSelection.");

exports.getAllPatientsServ = () => {
  return queryResponseDataSelection(patientsDAO.getAllPatients);
};

exports.getAllAdmittedPatientsServ = () => {
  return queryResponseDataSelection(patientsDAO.getAllAdmittedPatients);
};
