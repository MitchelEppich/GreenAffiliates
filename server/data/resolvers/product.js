const { Product } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    product: (_, { input }) => {
      return Product.find({ ...input });
    }
  },
  // Product: {},
  // Subscription: {},
  Mutation: {
    createProduct: (_, { input }) => {
      let $ = { ...input };
      let product = new Product({ ...$ });
      product.save();
      return product.toObject();
    },
    updateProduct: (_, { input }) => {
      let $ = { ...input };
      return Product.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteProduct: (_, { input }) => {
      let $ = { ...input };
      return Product.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
