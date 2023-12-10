const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// const crypto = require("crypto");
// const secret = crypto.randomBytes(64).toString("hex");
// console.log(secret);

const PaymentRoute = require("./Routes/PaymentRoute");
const InsuranceRoute = require("./Routes/InsuranceRoute");
const ProjectManagementRoute = require("./Routes/ProjectManagementRoute");

const app = express();
app.use(cors());

const DB_URI = process.env.DB_URI;
const port = process.env.port || 3090;

mongoose
  .connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB"));

app.listen(port, () => {
  console.log(`The Server is running on Port ${port}`);
});
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/files", express.static("public/uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/payment", PaymentRoute);
app.use("/insurance", InsuranceRoute);
app.use("/project", ProjectManagementRoute);
