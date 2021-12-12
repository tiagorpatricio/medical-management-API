const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patients");

router.get("/all", patientsController.getAllPatients);
router.get("/admitted", patientsController.getAllAdmittedPatients);
router.get("/:patientId", patientsController.getPatientById);
module.exports = router;

export {};
