const { Merchant } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    merchant: (_, { input }) => {
      return Merchant.find({ ...input });
    }
  },
  // Merchant: {},
  // Subscription: {},
  Mutation: {
    createMerchant: (_, { input }) => {
      let $ = { ...input };
      let merchant = new Merchant({ ...$ });
      merchant.save();
      return merchant.toObject();
    },
    updateMerchant: (_, { input }) => {
      let $ = { ...input };
      return Merchant.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteMerchant: (_, { input }) => {
      let $ = { ...input };
      return Merchant.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
