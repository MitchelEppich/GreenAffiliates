const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = Schema({
  body: String,
  replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Message"
  },
  affiliate: [{
      type: Schema.Types.ObjectId,
      ref: "Affiliate"
  }],
  merchant: [{
        type:  Schema.Types.ObjectId,
        ref: "Merchant"
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = MessageSchema;