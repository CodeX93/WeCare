import {
  addDoc,
  doc,
  getDoc,
  collection,
  deleteDoc,
  updateDoc,
  Timestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { Appointment, db } from "../config.js";
import AppointmnentModel from "../Model/AppointmentModel.js";
import admin from "../admin-firebaseConfig.js";
const firestore = admin.firestore();
import { getFirestore } from "firebase/firestore";

const makeAppointment = async (req, res) => {
  try {
    const data = req.body;

    data.Timestamp = Timestamp.now();

    const appointment = await addDoc(Appointment, data);

    if (appointment.id) {
      res.send("Appointment Placed Successfully");
    } else {
      res.status(500).send("Error placing Appointment");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fetchAllAppointment = async (req, res) => {
  try {
    const AllAppointment = await firestore.collection("Appointment");
    const data = await AllAppointment.get(); // Add await here

    let allData = [];

    if (data.empty) {
      res.status(404).send("No Data found");
    } else {
      data.forEach((element) => {
        const appointment = new AppointmnentModel(
          element.data().id,
          element.data().AppointmentDate,
          element.data().AppointmentDay,
          element.data().AppointmentType,
          element.data().AppointmnetFee,
          element.data().PatientId,
          element.data().DoctorId,
          element.data().Status,
          element.data().Complain,
          element.data().Timestamp
        );
        allData.push(appointment);
      });
      res.send(allData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getAppointmentsByDoctor = async (req, res) => {
  const doctorUniqueIdentifier = req.params.id;

  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, "Appointment"),
        where("doctorUniqueID", "==", doctorUniqueIdentifier)
      )
    );

    const appointments = [];

    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      const appointment = new AppointmnentModel({ ...documentData });
      appointments.push(appointment);
    });

    res.send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getAppointmentsByPatient = async (req, res) => {
  const patientUuid = req.params.id;

  try {
    const querySnapshot = await getDocs(
      query(collection(db, "Appointment"), where("userUid", "==", patientUuid))
    );

    const appointments = [];

    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      const appointment = new AppointmnentModel({ ...documentData });
      appointments.push(appointment);
    });

    res.send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateAppointment = async (req, res) => {
  const appId = req.params.id;
  const updateData = req.body;

  try {
    const appointmentRef = doc(getFirestore(), "Appointment", appId);
    const documentSnapshot = await getDoc(appointmentRef);

    if (documentSnapshot.exists()) {
      await updateDoc(appointmentRef, updateData);
      res.send("Appointment updated successfully");
    } else {
      res.status(404).send("Appointment not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteAppointment = async (req, res) => {
  const appId = req.params.id;

  try {
    const appRef = doc(collection(db, "Appointment"), appId);
    const documentSnapshot = await getDoc(appRef);

    if (documentSnapshot.exists()) {
      await deleteDoc(appRef);
      res.send(`Appointment with ID: ${appId} has been successfully deleted`);
    } else {
      res.status(404).send("Appointment not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export {
  makeAppointment,
  fetchAllAppointment,
  getAppointmentsByDoctor,
  updateAppointment,
  getAppointmentsByPatient,
  deleteAppointment,
};
