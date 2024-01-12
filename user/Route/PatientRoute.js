import express from "express";
import {
  addpatient,
  getAllPatients,
  updatePatientById,
  deletePatientById,
  getPatientByUID,
} from "../Controller/PatientController.js";

const PatientRoute = express.Router();
PatientRoute.post("/add", addpatient);
PatientRoute.get("/getAllPatients", getAllPatients);
PatientRoute.put("/update/:id", updatePatientById);
PatientRoute.post("/get", getPatientByUID);
PatientRoute.delete("/deletePatientById", deletePatientById);
export default PatientRoute;
