const express = require("express");
const router = express.Router();
let seller = require("./../controllers/seller");

router.post("/add_seller_detail", seller.add_seller_detail);

module.exports = router;
