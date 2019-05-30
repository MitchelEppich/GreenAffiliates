const { Affiliate } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    affiliate: (_, { input }) => {
      return Affiliate.find({ ...input });
    }
  },
  // Affiliate: {},
  // Subscription: {},
  Mutation: {
    createAffiliate: (_, { input }) => {
      let $ = { ...input };
      let affiliate = new Affiliate({ ...$ });
      affiliate.save();
      return affiliate.toObject();
    },
    updateAffiliate: (_, { input }) => {
      let $ = { ...input };
      return Affiliate.findOneAndUpdate(
        { _id: $._id },
        { ...$ },
        { new: true }
      );
    },
    deleteAffiliate: (_, { input }) => {
      let $ = { ...input };
      return Affiliate.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
