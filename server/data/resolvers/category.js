const { Category } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    category: (_, { input }) => {
      return Category.find({ ...input });
    }
  },
  // Category: {},
  // Subscription: {},
  Mutation: {
    createCategory: (_, { input }) => {
      let $ = { ...input };
      let category = new Category({ ...$ });
      category.save();
      return category.toObject();
    },
    updateCategory: (_, { input }) => {
      let $ = { ...input };
      return Category.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteCategory: (_, { input }) => {
      let $ = { ...input };
      return Category.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
