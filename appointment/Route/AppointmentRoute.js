import express from "express";

import {
  makeAppointment,
  fetchAllAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../Controller/AppointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.post("/makeappointment", makeAppointment);
appointmentRoute.get("/allappointment", fetchAllAppointment);
appointmentRoute.get("/:id", getAppointmentById);
appointmentRoute.put("/update/:id", updateAppointment);
appointmentRoute.delete("/delete/:id", deleteAppointment);

export default appointmentRoute;
