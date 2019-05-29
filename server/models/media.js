const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaSchema = Schema({
  traffic: Number,
  views: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = MediaSchema;
