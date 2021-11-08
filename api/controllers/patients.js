const patientsService = require("../services/patients");
const { DbError } = require("../utils/errors");

exports.getAllPatients = (req, res) => {
    try {
        res.send(patientsService.getAllPatientsServ());
    } catch (error) {
        if (error instanceof DbError) {
            res.status(500).send({ error: "DB malfunction" });
        } else {
            res.send({ error });
        }
    }
};

exports.getAllAdmittedPatients = (req, res) => {
    try {
        res.send(patientsService.getAllAdmittedPatientsServ());
    } catch (error) {
        if (error instanceof DbError) {
            res.status(500).send({ error: "DB malfunction" });
        } else {
            res.send({ error });
        }
    }
};

exports.getPatientById = (req, res) => {
    try {
        res.send(patientsService.getPatientsById(req.params));
    } catch (error) {
        if (error instanceof DbError) {
            res.status(500).send({ error: "DB malfunction" });
        } else {
            res.send({ error });
        }
    }
};
