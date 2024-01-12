import express from "express";

import {
  makeAppointment,
  fetchAllAppointment,
  getAppointmentsByDoctor,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByPatient,
} from "../Controller/AppointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.post("/makeappointment", makeAppointment);
appointmentRoute.get("/allappointment", fetchAllAppointment);
appointmentRoute.get("/:id", getAppointmentsByDoctor);
appointmentRoute.get("/patient/:id", getAppointmentsByPatient);
appointmentRoute.put("/update/:id", updateAppointment);
appointmentRoute.delete("/delete/:id", deleteAppointment);

export default appointmentRoute;
