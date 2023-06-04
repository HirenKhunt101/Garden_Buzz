const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: Date,
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
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: Date,
  UserType: String,
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
  Category: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: Date,
});

const Productdetail = mongoose.model("product_detail", Product_detail);
module.exports.product_detail = Productdetail;

const Cart_detail = new mongoose.Schema({
  UserId: String,
  ProductId: {
    type: "ObjectId",
    ref: "Productdetail",
  },
  Quantity: {
    type: String,
    default: 1,
  },
  PotColor: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: Date,
});

const Cartdetail = mongoose.model("cart_detail", Cart_detail);
module.exports.cart_detail = Cartdetail;


const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChatMessage = mongoose.model("chat_message", chatMessageSchema);
module.exports.chat_message = ChatMessage;