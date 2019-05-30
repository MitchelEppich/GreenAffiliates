const { Commission } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    commission: (_, { input }) => {
      return Commission.find({ ...input });
    }
  },
  // Commission: {},
  // Subscription: {},
  Mutation: {
    createCommission: (_, { input }) => {
      let $ = { ...input };
      let commission = new Commission({ ...$ });
      commission.save();
      return commission.toObject();
    },
    updateCommission: (_, { input }) => {
      let $ = { ...input };
      return Commission.findOneAndUpdate(
        { _id: $._id },
        { ...$ },
        { new: true }
      );
    },
    deleteCommission: (_, { input }) => {
      let $ = { ...input };
      return Commission.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
