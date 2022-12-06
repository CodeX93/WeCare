import mongoose from "mongoose";
const Schema = mongoose.Schema;
const typeSchema = new Schema(
  {
    TypeName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const type = mongoose.model("type", typeSchema);
export default type;
