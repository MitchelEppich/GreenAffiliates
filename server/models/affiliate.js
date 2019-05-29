const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AffiliateSchema = Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  website: String,
  password: String,
  merchant: [
    {
      type: Schema.Types.ObjectId,
      ref: "Merchant"
    }
  ],
  reward: String,
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  token: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = AffiliateSchema;
