import mongoose from "mongoose";
const Schema = mongoose.Schema;
const inventorySchema = new Schema(
  {
    Type: {
      type: String,
      required: true,
    },
    Product: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const inventory = mongoose.model("Inventory", inventorySchema);
export default inventory;
