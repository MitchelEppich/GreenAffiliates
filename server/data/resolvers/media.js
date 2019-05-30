const { Media } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    media: (_, { input }) => {
      return Media.find({ ...input });
    }
  },
  // Media: {},
  // Subscription: {},
  Mutation: {
    createMedia: (_, { input }) => {
      let $ = { ...input };
      let media = new Media({ ...$ });
      media.save();
      return media.toObject();
    },
    updateMedia: (_, { input }) => {
      let $ = { ...input };
      return Media.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteMedia: (_, { input }) => {
      let $ = { ...input };
      return Media.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
