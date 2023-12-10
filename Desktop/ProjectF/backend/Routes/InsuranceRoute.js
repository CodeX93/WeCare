const router = require("express").Router();

const { getPlans } = require("../Controller/Insurance");

router.get("/get-plans", getPlans);

module.exports = router;
