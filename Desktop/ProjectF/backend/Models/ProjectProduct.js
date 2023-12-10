const mongoose = require("mongoose");
const ProjectProductSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      unique: true,
    },
    Description: {
      type: String,
    },
    Email: {
      type: String,
    },
    City: {
      type: String,
    },
    State: {
      type: String,
    },
    Country: {
      type: String,
    },

    file: {
      type: [String],
    },
  },
  { timestamps: true }
);
const ProjectProduct = mongoose.model("ProjectProduct", ProjectProductSchema);
module.exports = ProjectProduct;
