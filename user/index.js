import express from "express";
import cors from "cors";
import PatientRoute from "./Route/PatientRoute.js";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

// Use fileURLToPath and dirname to get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import path module
import path from "path";

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(bodyParser.json()); // Body-parser for parsing JSON (express.json() is sufficient for this)
app.use(cors({ origin: true, credentials: true })); // CORS middleware
app.use(express.urlencoded({ extended: false })); // Middleware for parsing URL-encoded bodies

// Configure file upload middleware
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB file size limit
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "RecordFiles"),
  })
);

// Use the route for handling patient operations
app.use("/patient", PatientRoute);

// Start the server
const port = process.env.PORT || 4008; // Use PORT from environment variables or default to 4008
app.listen(port, () => {
  console.log(`App is listening at PORT ${port}`);
});
