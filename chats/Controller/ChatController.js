import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import ChatModel from "../Model/Chat.js";
import { Chats } from "../config.js";
import admin from "../admin-firebaseConfig.js";
import { v4 as uuidv4 } from "uuid";

const firestore = admin.firestore();

const sendMessage = async (req, res, next) => {
  const { receiverId, receiverName, senderId, senderName, MessageContent } =
    req.body;

  // Generate a unique ID using UUID
  const id = uuidv4();

  // Get the current timestamp
  const Timestamp = new Date().toISOString();

  // Create an instance of ChatModel
  const chat = new ChatModel(
    id,
    MessageContent,
    receiverId,
    receiverName,
    senderId,
    senderName,
    Timestamp
  );

  // Convert chat to a plain JavaScript object
  const chatData = {
    id: chat.id,
    MessageContent: chat.MessageContent,
    receiverId: chat.receiverId,
    receiverName: chat.receiverName,
    senderId: chat.senderId,
    senderName: chat.senderName,
    timestamp: chat.Timestamp,
  };

  try {
    // Store the chatData object in the Firestore collection "Chats"
    const chatDocRef = await addDoc(Chats, chatData);

    // Respond with the created chat instance
    res.status(200).json(chatData);
  } catch (error) {
    console.error("Error storing chat in Firestore:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getAllMessagesByReceiverId = async (req, res, next) => {
  const receiverId = req.body.receiverId;

  try {
    const querySnapshot = await getDocs(
      query(Chats, where("receiverId", "==", receiverId))
    );

    if (!querySnapshot.empty) {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.send(messages);
    } else {
      res.status(404).send("No messages found for this receiver");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllReceivers = async (req, res, next) => {};

export { sendMessage, getAllMessagesByReceiverId };
