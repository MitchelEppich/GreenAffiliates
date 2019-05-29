const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: String,
  url: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = ProductSchema;