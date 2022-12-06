import express from "express";
import IngredientsData from "./IngredientsData.js";
import InventoryData from "./InventoryData.js";
import OrderData from "./OrderData.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//import {} from "dotenv/config";
const app = express();

import adminRouter from "./routes/admin.js";
import order from "./models/order_model.js";
app.use(cors());
app.use(bodyParser());
//const uri = process.env.DB;
mongoose.connect("mongodb+srv://hash:sultan1234@scd.pirmark.mongodb.net/Agha", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/inventory", adminRouter);
// app.get("/ingredientdata", (req, res) => {
//   res.send(IngredientsData.ingredients);
// });

app.get("/orderdata", (req, res) => {
  res.send(OrderData.orders);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//app.get("/inventorydata", (req, res) => {
//res.send(InventoryData.items);
//});

app.post("/ingredientdata", (req, res) => {
  console.log("In post ");
  const { type, category, quantity } = req.body;
  IngredientsData.ingredients.push({
    IngredientId: IngredientsData.ingredients.length,
    Type: type,
    Category: category,
    quantity: quantity,
  });

  console.log(req.body);
  console.log(IngredientsData.ingredients);
  res.send("Done");
});
