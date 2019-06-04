const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = Schema({
  key: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = CategorySchema;
