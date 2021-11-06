const patientsService = require("../services/patients");

exports.getAllPatients = (req, res) => {
  res.send(patientsService.getAllPatientsServ());
};

exports.getAllAdmittedPatients = (req, res) => {
  res.send(patientsService.getAllAdmittedPatientsServ());
};
