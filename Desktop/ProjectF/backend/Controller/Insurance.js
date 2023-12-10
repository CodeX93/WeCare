const InsurancePlan = require("../Models/InsurancePlan");

// Route to fetch insurance plans for a property
let getPlans = async (req, res) => {
  try {
    const insurancePlan = await InsurancePlan.find();
    res.json(insurancePlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getPlans };
