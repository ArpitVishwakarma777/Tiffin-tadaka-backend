const express = require("express");
const mongoose = require("mongoose");
const { type } = require("os");

const contactData = new mongoose.Schema({
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
});
const Contact = mongoose.model("contact",contactData)
module.exports= Contact;