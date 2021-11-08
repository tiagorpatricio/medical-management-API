const { getAllPatients, getAllAdmittedPatients, getPatientById } = require("../DAO/patients");
const queryResponseDataSelection = require("../utils/queryResponseDataSelection.");
const { DbError } = require("../utils/errors");

exports.getAllPatientsServ = async () => {
    try {
        const allPatients = await getAllPatients();
        return queryResponseDataSelection(allPatients);
    } catch (err) {
        throw new DbError(err);
    }
};

exports.getAllAdmittedPatientsServ = async () => {
    try {
        const admittedPatients = await getAllAdmittedPatients();
        return queryResponseDataSelection(admittedPatients);
    } catch (err) {
        throw new DbError(err);
    }
};

exports.getPatientsById = async ({ patientId }) => {
    try {
        const patientById = await getPatientById(patientId);
        return queryResponseDataSelection(patientById);
    } catch (err) {
        throw new DbError(err);
    }
};
