const mongoose = require("mongoose");
const { type } = require("os");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  uid: {
    type: String,
    unique: true,
    required: true,
  },
  mobile:{
    type:Number
  },
  address:{
    type:String
  },
  img:{
    type:String
  },
  subscription: {
    type: Array,
  },
  addedCarts:{
    type:Array
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
