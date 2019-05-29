const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComissionSchema = Schema({
  amount: Number,
  percent: Number,
  affiliate: {
    type: Schema.Types.ObjectId,
    ref: "Affiliate"
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: "Merchant"
  },
  archived: Boolean,
  status: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = ComissionSchema;
