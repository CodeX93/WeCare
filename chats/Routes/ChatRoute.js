import express from "express";
const chatRoutes = express.Router();
import {
  sendMessage,
  getAllMessagesByReceiverId,
} from "../Controller/ChatController.js";

chatRoutes.post("/sendmessage", sendMessage);
chatRoutes.post("/getchats", getAllMessagesByReceiverId);

export default chatRoutes;
