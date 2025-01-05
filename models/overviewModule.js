const mongoose = require("mongoose");
const { type } = require("os");
const overviewSchema = new mongoose.Schema({
  overviewType: {
    type: String,
    required: true,
  },
  overviewText: {
    type: String,
    required: true,
  },
  imgsrc: {
    type: String,
    required: true,
  },
});
const Overview = mongoose.model("overview", overviewSchema);
module.exports = Overview
