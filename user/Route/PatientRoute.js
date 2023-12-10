import express from "express";
import {
  addpatient,
  getAllPatients,
  updatePatientById,
  deletePatientById,
} from "../Controller/PatientController.js";

const PatientRoute = express.Router();
PatientRoute.post("/add", addpatient);
PatientRoute.get("/getAllPatients", getAllPatients);
PatientRoute.put("/updatePatientById", updatePatientById);
// PatientRoute.put("/update/:id", updateMedicalRecordById);
PatientRoute.delete("/deletePatientById", deletePatientById);
export default PatientRoute;
