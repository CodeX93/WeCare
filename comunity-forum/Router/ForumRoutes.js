import express from "express";
const forumRoutes = express.Router();
import {
  createPost,
  fetchAllPost,
  getPostbyID,
  DeletePostbyID,
} from "../Controller/Forum.js";

forumRoutes.post("/createPost", createPost);
forumRoutes.get("/getPost", fetchAllPost);
forumRoutes.get("/:id", getPostbyID);
forumRoutes.get("/delete/:id", DeletePostbyID);

export default forumRoutes;
