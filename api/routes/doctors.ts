const express = require("express");
const router = express.Router();
const doctorsController = require("../controllers/doctors");

router.get("/all", (req: any, res: any) => {
  doctorsController.getAllDoctors(req, res);
});

module.exports = router;
export {};
