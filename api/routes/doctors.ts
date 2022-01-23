const express = require("express");
const router = express.Router();
const doctorsController = require("../controllers/doctors");

router.get("/all", (req: any, res: any) => {
  doctorsController.getAllDoctors(req, res);
});

router.post("/createNewDoctor", (req: any, res: any) => {
  doctorsController.createNewDoctor(req, res);
});

module.exports = router;
export {};
