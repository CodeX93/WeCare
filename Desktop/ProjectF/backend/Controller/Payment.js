const Stripe = require("stripe")(process.env.stripe_secret);

let CreatePayment = async (req, res) => {
  const { token, amount } = req.body;

  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
      transfer_data: {
        // destination: 'acct_1234', // Replace with the ID of the connected account you want to transfer to
      },
    });

    return res.send("Success");
  } catch (err) {
    console.log(err);
    return res.send("Failed");
  }
};

module.exports = {
  CreatePayment,
};
