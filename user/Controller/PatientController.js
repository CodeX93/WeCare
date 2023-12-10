// PatientController.js
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import admin from "../admin-firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import Patient from "../Model/Patient.js";

const firestore = admin.firestore();
const storageBucket = admin.storage().bucket();

const addpatient = async (req, res) => {
  if (!req.files || !req.files.profileImage) {
    return res.status(400).send("No profile image uploaded.");
  }

  const profileImage = req.files.profileImage;
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
  if (!allowedMimeTypes.includes(profileImage.mimetype)) {
    return res.status(400).send("Only image files are allowed");
  }

  try {
    // Create a new patient instance
    const newPatient = new Patient(
      req.body.uid,
      req.body.bloodGroup,
      req.body.city,
      req.body.contactNo,
      req.body.displayName,
      req.body.dob,
      req.body.email,
      req.body.gender,
      req.body.name,
      "", // URL will be set later
      req.body.age
    );

    const fileName = `${uuidv4()}_${profileImage.name}`;
    const fileRef = storageBucket.file(`profileImages/${fileName}`);

    const blobStream = fileRef.createWriteStream({
      metadata: {
        contentType: profileImage.mimetype,
      },
    });

    blobStream.on("error", (error) => {
      console.error("Stream error:", error);
      return res.status(500).send("Error during file upload");
    });

    blobStream.on("finish", async () => {
      // Construct the URL manually
      const fileUrl = `https://storage.googleapis.com/${storageBucket.name}/${fileName}`;
      const patientData = { ...newPatient, profileImage: fileUrl };

      // Add patient to Firestore
      const result = await firestore.collection("users").add(patientData);

      res
        .status(200)
        .json({ id: result.id, message: "Patient  added successfully" });
    });

    // Pipe the file buffer to the stream
    fs.createReadStream(profileImage.tempFilePath).pipe(blobStream);
  } catch (error) {
    console.error("Error adding patient:", error);
    res.status(500).send(error.message);
  }
};

// PatientController.js
// ... [existing imports]

const getAllPatients = async (req, res) => {
  try {
    const patients = [];
    const querySnapshot = await firestore.collection("users").get();

    querySnapshot.forEach((doc) => {
      patients.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).send(error.message);
  }
};

const updatePatientById = async (req, res) => {
  const patientId = req.body.uid;
  const updatedData = req.body;

  try {
    const patientDocRef = firestore.doc(`users/${patientId}`);
    await patientDocRef.update(updatedData);

    res
      .status(200)
      .json({ message: `Patient with ID ${patientId} updated successfully.` });
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).send(error.message);
  }
};

const deletePatientById = async (req, res) => {
  const patientId = req.body.uid;

  try {
    const patientDocRef = firestore.doc(`users/${patientId}`);
    await patientDocRef.delete();

    res
      .status(200)
      .json({ message: `Patient with ID ${patientId} deleted successfully.` });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).send(error.message);
  }
};

export { addpatient, getAllPatients, updatePatientById, deletePatientById };
