const mongoose = require("mongoose");
const { Decimal128 } = require("bson");
const InsurancePlanSchema = mongoose.Schema(
  {
    CompanyName: {
      type: String,
      unique: true,
    },

    Rate: {
      type: Decimal128,
    },
  },
  { timestamps: true }
);

const InsurancePlan = mongoose.model("InsurancePlan", InsurancePlanSchema);

module.exports = InsurancePlan;
