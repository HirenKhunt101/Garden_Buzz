const mongoose = require("mongoose");
const schema = require("./../database/database.schema");
const mongo = require("./../database/database.service");

let add_seller_detail = async function (req, res) {
  console.log("done");
};

module.exports = {
  add_seller_detail: add_seller_detail,
};
