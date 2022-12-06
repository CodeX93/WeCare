import mongoose from "mongoose";
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    OrderId: {
      type: Number,
      required: true,
      unique: true,
    },
    OrderDate: {
      type: String,
      required: true,
    },
    OrderDay: {
      type: String,
      required: true,
    },
    OrderAddress: {
      type: String,
      required: true,
    },
    OrderPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const order = mongoose.model("Order", orderSchema);
export default order;
