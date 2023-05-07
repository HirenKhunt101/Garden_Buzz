const express = require("express");
const router = express.Router();
let seller = require("./../controllers/seller");

router.post("/add_seller_detail", seller.add_seller_detail);
router.post("/login_verify", seller.login_verify);
router.post("/add_product", seller.add_product);
router.post("/get_seller_products", seller.get_seller_products);

module.exports = router;
