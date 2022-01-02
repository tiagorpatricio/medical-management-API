const { getAllDoctorsServ } = require("../services/doctors");

exports.getAllDoctors = async (req: any, res: any) => {
  try {
    res.send(await getAllDoctorsServ());
  } catch (error) {
    res.send(error);
  }
};

export {};
