const {
  getAllPatientsServ,
  getAllAdmittedPatientsServ,
  getPatientsById,
} = require("../services/patients");

exports.getAllPatients = async (req, res) => {
  try {
    res.send(await getAllPatientsServ());
  } catch (error) {
    res.send( error );
  }
};

exports.getAllAdmittedPatients = async (req, res) => {
  try {
    res.send(await getAllAdmittedPatientsServ());
  } catch (error) {
    res.send( error );
  }
};

exports.getPatientById = async (req, res) => {
  try {
    res.send(await getPatientsById(req.params));
  } catch (error) {
    res.send(error );
  }
};
