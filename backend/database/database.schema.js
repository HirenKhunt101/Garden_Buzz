const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("user", User_Schema);
module.exports.user = User;

const Seller_detail = new mongoose.Schema({
  NurseryName: String,
  Email: String,
  ContactNumber: String,
  Address: String,
  Pincode: String,
  Username: String,
  Password: String,
});

const SellerDetail = mongoose.model("seller_detail", Seller_detail);
module.exports.seller_detail = SellerDetail;
