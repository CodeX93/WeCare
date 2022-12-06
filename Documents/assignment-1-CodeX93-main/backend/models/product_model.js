import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    ProductId: {
      type: Number,
      required: true,
      unique: true,
    },
    Category: {
      type: String,
      required: true,
      unique: true,
    },
    Type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const product = mongoose.model("product", productSchema);
export default product;
