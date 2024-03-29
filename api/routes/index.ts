const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = process.env.PORT || "3000";

app.listen(3000, () => {
  console.log(`I'm up and running on port: ${server}`);
});

app.get("/", (req: any, res: any) => {
  res.send(
    "Welcome to Medical management (MM), a helpfull tool to manage a medical service."
  );
});

/*Including the files in the routes folder 
and redirecting requests to them. */

const patientsRoutes = require("./patients");
const doctorsRoutes = require("./doctors");
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
