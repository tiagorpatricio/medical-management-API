const {
  getAllDoctorsServ,
  createNewDoctorServ,
} = require("../services/doctors");

exports.getAllDoctors = async (req: any, res: any) => {
  try {
    res.send(await getAllDoctorsServ());
  } catch (error) {
    res.send(error);
  }
};

exports.createNewDoctor = async (req: any, res: any) => {
  try {
    res.send(await createNewDoctorServ(req.body));
  } catch (err) {
    res.send(err);
  }
};

export {};
