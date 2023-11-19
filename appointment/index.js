import express from "express";
import cors from "cors";
import appointmentRoute from "./Route/AppointmentRoute.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: false }));

app.use("/appointment", appointmentRoute);

app.listen(4003, () => {
  console.log("App is listening at PORT 4003");
});
