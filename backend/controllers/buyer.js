const mongoose = require("mongoose");
const schema = require("./../database/database.schema");
const mongo = require("./../database/database.service");
const nodemailer = require("nodemailer");
const SellerDetail = schema.seller_detail;
const ProductDetail = schema.product_detail;
const CartDetail = schema.cart_detail;

let add_product_in_cart = async function (req, res) {
  let body = req.body.product;
  try {
    const CartDetailObj = new CartDetail({
      ProductId: body._id,
      Quantity: 1,
      PotColor: body.PotColor,
      //   UserId: body.UserId,
    });
    await CartDetailObj.save();
    res.json({ message: "Product added Successfully", status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
};

let remove_product_from_cart = async function (req, res) {
  let body = req.body;
  try {
    await CartDetail.deleteOne({ ProductId: body.ProductId });
    res.json({ message: "Product Removed Successfully", status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
};

let get_cart_details = async function (req, res) {
  let body = req.body;
  try {
    let response = await CartDetail.aggregate([
      {
        $match: {
          // 'UserId': ''
        },
      },
      {
        $lookup: {
          from: "product_details",
          localField: "ProductId",
          foreignField: "_id",
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
        },
      },
      {
        $project: {
          _id: "$result._id",
          Name: "$result.Name",
          Price: "$result.Price",
          ImageURL: "$result.ImageURL",
          ProductId: 1,
          ProductQuantity: "$Quantity",
          PotColor: 1,
        },
      },
    ]);
    res.json({
      data: response,
      message: "Product Removed Successfully",
      status: "ok",
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
};

module.exports = {
  add_product_in_cart: add_product_in_cart,
  remove_product_from_cart: remove_product_from_cart,
  get_cart_details: get_cart_details,
};
