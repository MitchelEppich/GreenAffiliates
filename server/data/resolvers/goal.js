const { Goal } = require("../../models");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    goal: (_, { input }) => {
      return Goal.find({ ...input });
    }
  },
  // Goal: {},
  // Subscription: {},
  Mutation: {
    createGoal: (_, { input }) => {
      let $ = { ...input };
      let goal = new Goal({ ...$ });
      goal.save();
      return goal.toObject();
    },
    updateGoal: (_, { input }) => {
      let $ = { ...input };
      return Goal.findOneAndUpdate({ _id: $._id }, { ...$ }, { new: true });
    },
    deleteGoal: (_, { input }) => {
      let $ = { ...input };
      return Goal.findOneAndDelete({ _id: $._id });
    }
  }
};

module.exports = resolvers;
