const router = require("express").Router();

const { CreatePayment } = require("../Controller/Payment");

router.post("/create-payment", CreatePayment);

module.exports = router;
