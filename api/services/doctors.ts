const { getAllDoctors } = require("../DAO/doctors");
const queryResponseDataSelection = require("../utils/queryResponseDataSelection");

exports.getAllDoctorsServ = async () => {
  try {
    const allDoctors = await getAllDoctors();
    return queryResponseDataSelection(allDoctors);
  } catch (err) {
    throw err;
  }
};

export {};
