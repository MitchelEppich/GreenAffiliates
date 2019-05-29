const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MerchantSchema = Schema({
  name: String,
  surname: String,
  company: String,
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  email: String,
  phone: String,
  website: String,
  password: String,
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  media: [
    {
      type: Schema.Types.ObjectId,
      ref: "Media"
    }
  ],
  goal: [
    {
      type: Schema.Types.ObjectId,
      ref: "Goal"
    }
  ],
  tracker: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tracker"
    }
  ],
  tier: [Number],
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  token: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = MerchantSchema;
