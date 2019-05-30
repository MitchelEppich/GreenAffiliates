const { Tracker } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    tracker: (_, { input }) => {
      return Tracker.find({ ...input });
    }
  },
  // Tracker: {},
  // Subscription: {},
  Mutation: {
    createTracker: (_, { input }) => {
      let $ = { ...input };
      let tracker = new Tracker({ ...$ });
      tracker.save();
      return tracker.toObject();
    },
    updateTracker: (_, { input }) => {
      let $ = { ...input };
      return Tracker.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteTracker: (_, { input }) => {
      let $ = { ...input };
      return Tracker.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
