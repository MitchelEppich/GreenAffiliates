const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoalSchema = Schema({
  type: String,
  amount: Number,
  data: [Number],
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

module.exports = GoalSchema;
