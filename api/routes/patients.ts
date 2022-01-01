const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patients");

router.get("/all", (req: any, res: any) => {
  patientsController.getAllPatients(req, res);
});
router.get("/admitted", (req: any, res: any) => {
  patientsController.getAllAdmittedPatients(req, res);
});
router.get("/:patientId", (req: any, res: any) =>
  patientsController.getPatientById(req, res)
);
router.post("/createNewPatient", (req: any, res: any) => {
  patientsController.createNewPatient(req, res);
});

router.put("/updatePatient/:patientId", (req: any, res: any) => {
  patientsController.updatePatient(req, res);
});

module.exports = router;

export {};
