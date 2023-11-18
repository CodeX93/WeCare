import {
  addDoc,
  doc,
  getDoc,
  collection,
  Firestore,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { Forum, db } from "../config.js";
import ForumModel from "../Model/Forum.js";
import admin from "../admin-firebaseConfig.js";
const firestore = admin.firestore();
import { getFirestore } from "firebase/firestore";
const createPost = async (req, res, next) => {
  try {
    const data = req.body;
    data.Timestamp = Timestamp.now();

    const post = await addDoc(Forum, data);

    if (post.id) {
      res.send("Post Added Successfully");
    } else {
      res.status(500).send("Error adding post");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fetchAllPost = async (req, res, next) => {
  try {
    const AllForums = await firestore.collection("Forum");
    const data = await AllForums.get(); // Add await here

    let allData = [];

    if (data.empty) {
      res.status(404).send("No Data found");
    } else {
      data.forEach((element) => {
        const forum = new ForumModel(
          element.data().id,
          element.data().PostTitle,
          element.data().PostContent,
          element.data().AuthorId,
          element.data().Timestamp
        );
        allData.push(forum);
      });
      res.send(allData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getPostbyID = async (req, res, next) => {
  const postId = req.params.id;

  try {
    const documentSnapshot = await getDoc(doc(collection(db, "Forum"), postId));

    if (documentSnapshot.exists()) {
      const documentData = documentSnapshot.data();

      // Using the spread operator to copy all properties from documentData to post
      const post = new ForumModel({ ...documentData });

      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const DeletePostbyID = async (req, res, next) => {
  const postId = req.params.id;

  try {
    const postRef = doc(collection(db, "Forum"), postId);
    const documentSnapshot = await getDoc(postRef);

    if (documentSnapshot.exists()) {
      await deleteDoc(postRef);
      res.send(`Post with ID: ${postId} has been successfully deleted`);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export { createPost, fetchAllPost, getPostbyID, DeletePostbyID };
