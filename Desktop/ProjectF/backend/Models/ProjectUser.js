const mongoose = require("mongoose");
const ProjectUserSchema = mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
      unique: true,
    },
    Password: {
      type: String,
    },

    AccountNumber: {
      type: String,
      unique: true,
    },
    ActiveStatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ProjectUser = mongoose.model("ProjectUser", ProjectUserSchema);

module.exports = ProjectUser;
