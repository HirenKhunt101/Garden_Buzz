const express = require("express");
const router = express.Router();
let seller = require("./../controllers/seller");
let buyer = require('./../controllers/buyer')
router.post("/add_seller_detail", seller.add_seller_detail);
router.post("/login_verify", seller.login_verify);
router.post("/add_product", seller.add_product);
router.post("/get_seller_products", seller.get_seller_products);
router.post("/add_product_in_cart", buyer.add_product_in_cart);
router.post("/remove_product_from_cart", buyer.remove_product_from_cart);
router.post("/get_cart_details", buyer.get_cart_details);

module.exports = router;
