const { CommissionArchived } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    commissionArchived: (_, { input }) => {
      return CommissionArchived.find({ ...input });
    }
  },
  // CommissionArchived: {},
  // Subscription: {},
  Mutation: {
    createCommissionArchived: (_, { input }) => {
      let $ = { ...input };
      let commissionArchived = new CommissionArchived({ ...$ });
      commissionArchived.save();
      return commissionArchived.toObject();
    },
    updateCommissionArchived: (_, { input }) => {
      let $ = { ...input };
      return CommissionArchived.findOneAndUpdate(
        { _id: $._id },
        { ...$ },
        { new: true }
      );
    },
    deleteCommissionArchived: (_, { input }) => {
      let $ = { ...input };
      return CommissionArchived.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
