import mongoose from "mongoose";
const Schema = mongoose.Schema;
const categorySchema = new Schema(
  {
    CategoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const category = mongoose.model("category", categorySchema);
export default category;
