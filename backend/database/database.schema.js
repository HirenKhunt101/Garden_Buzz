const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
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


const Product_detail = new mongoose.Schema({
  Name: String,
  Price: Number,
  Description: String,
  PotColor: String,
  CareInstructions: String,
  ProductQuantity: Number,
  ImageURL: String,
});
 
const Productdetail = mongoose.model("product_detail", Product_detail);
module.exports.product_detail = Productdetail;

const Cart_detail = new mongoose.Schema({
  UserId: String,
  ProductId: {
    type: "ObjectId",
    ref: 'Productdetail',
  },
  Quantity: {
    type: String,
    default: 1
  },
  PotColor: String,
});
 
const Cartdetail = mongoose.model("cart_detail", Cart_detail);
module.exports.cart_detail = Cartdetail;






