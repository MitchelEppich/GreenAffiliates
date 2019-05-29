const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = Schema({
  postal: { type: String, default: "" },
  country: { type: String, default: "" },
  state: { type: String, default: "" },
  address: { type: String, default: "" },
  apartment: { type: String, default: "" },
  city: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = AddressSchema;
