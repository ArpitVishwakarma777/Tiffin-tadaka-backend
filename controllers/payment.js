require('dotenv').config(); // Load environment variables from .env file
const Razorpay = require("razorpay");
const crypto = require("crypto");

// Log the environment variable to verify it's loaded correctly
console.log('key is a:',process.env.RAZORPAY_KEY_SECRET );

const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET,
});

// Create Order
const createOrder = async (req, res) => {
  const { amount, currency } = req.body;
// console.log(
//   "amount: " + amount + " currency: " + currency
// )
  try {
    // Validate input
    if (!amount  || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }
    if (!currency ) {
      return res.status(400).json({ success: false, message: "Invalid currency" });
    }

    // Create Razorpay Order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert amount to paise
      currency,
    });

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Error creating order",
      error: error.response ? error.response.data : error.message,
    });
  }
};

// Verify Payment
const verifyPayment = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
console.log( razorpay_order_id," ", razorpay_payment_id," ", razorpay_signature);

  try {
    const generated_signature = crypto
      .createHmac("sha256",process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({
      success: false,
      message: "Error verifying payment",
      error: error.message,
    });
  }
};

module.exports = { createOrder, verifyPayment };