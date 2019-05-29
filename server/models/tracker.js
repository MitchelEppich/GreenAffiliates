const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackerSchema = Schema({
  affiliate: {
      type: Schema.Types.ObjectId,
      ref: "Affiliate"
  },
  merchant: {
      type: Schema.Types.ObjectId,
      ref: "Merchant"
  },
  rate: {type: Number, default: 0},
  traffic: Number,
  status: Number,
  dueCommision: Number,
  paidCommision: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = TrackerSchema;