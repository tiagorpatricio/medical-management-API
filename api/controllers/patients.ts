const {
  getAllPatientsServ,
  getAllAdmittedPatientsServ,
  getPatientsByIdServ,
  createNewPatientServ,
  updatePatientServ,
} = require("../services/patients");

exports.getAllPatients = async (req: any, res: any) => {
  try {
    res.send(await getAllPatientsServ());
  } catch (error) {
    res.send(error);
  }
};

exports.getAllAdmittedPatients = async (req: any, res: any) => {
  try {
    res.send(await getAllAdmittedPatientsServ());
  } catch (error) {
    res.send(error);
  }
};

exports.getPatientById = async (req: any, res: any) => {
  try {
    res.send(await getPatientsByIdServ(req.params));
  } catch (error) {
    res.send(error);
  }
};

exports.createNewPatient = async (req: any, res: any) => {
  try {
    res.send(await createNewPatientServ(req.body));
  } catch (error) {
    res.send(error);
  }
};

exports.updatePatient = async (req: any, res: any) => {
  try {
    res.send(await updatePatientServ(req.params, req.body));
  } catch (error) {
    res.send(error);
  }
};
