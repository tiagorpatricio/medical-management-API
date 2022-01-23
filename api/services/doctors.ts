import doctorSchema from "../models/doctor";

const { getAllDoctors, createNewDoctor } = require("../DAO/doctors");
const queryResponseDataSelection = require("../utils/queryResponseDataSelection");

exports.getAllDoctorsServ = async () => {
  try {
    const allDoctors = await getAllDoctors();
    return queryResponseDataSelection(allDoctors);
  } catch (err) {
    throw err;
  }
};

exports.createNewDoctorServ = async (params: object) => {
  try {
    const { error, value } = doctorSchema.validate(params);
    if (error) {
      return error.details;
    }
    const newDoctor = await createNewDoctor(value);
    return queryResponseDataSelection(newDoctor);
  } catch (err) {
    throw err;
  }
};

export {};
