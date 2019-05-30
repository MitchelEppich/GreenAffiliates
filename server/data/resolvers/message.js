const { Message } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    message: (_, { input }) => {
      return Message.find({ ...input });
    }
  },
  // Message: {},
  // Subscription: {},
  Mutation: {
    createMessage: (_, { input }) => {
      let $ = { ...input };
      let message = new Message({ ...$ });
      message.save();
      return message.toObject();
    },
    updateMessage: (_, { input }) => {
      let $ = { ...input };
      return Message.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteMessage: (_, { input }) => {
      let $ = { ...input };
      return Message.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
