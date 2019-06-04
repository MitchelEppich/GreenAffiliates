const { Address } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    address: (_, { input }) => {
      return Address.find({ ...input });
    }
  },
  // Address: {},
  // Subscription: {},
  Mutation: {
    createAddress: (_, { input }) => {
      let $ = { ...input };
      let address = new Address({ ...$ });
      address.save();
      return address.toObject();
    },
    updateAddress: (_, { input }) => {
      let $ = { ...input };
      return Address.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteAddress: (_, { input }) => {
      let $ = { ...input };
      return Address.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
