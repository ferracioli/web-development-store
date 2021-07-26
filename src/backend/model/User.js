const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { 
      collection : 'User' 
  }
);

module.exports = mongoose.model("User", UserSchema);