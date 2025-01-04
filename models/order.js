const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  adrress: { type: String, required: true },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  other: {
    type: String,
    required: true,
  }
});
const Order = mongoose.model('order',orderSchema);
module.exports = Order;
