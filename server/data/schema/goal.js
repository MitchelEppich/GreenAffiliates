let Query = `
    goal(input: GetGoalInput): Goal
`;

let Mutation = `
    createGoal(input: GoalInput): Goal
    updateGoal(input: GoalInput): Goal
    deleteGoal(input: GoalInput): Goal
`;

let Subscription = `
`;

let Type = `
    type Goal {
        _id: String
        type: String
        amount: Float
        data: [Float]
        startDate: String
        endDate: String
        createdAt: String
    }
`;

let Input = `
    input GetGoalInput {
        _id: String
        token: String
    }

    input GoalInput {
        _id: String
        type: String
        amount: Float
        data: [Float]
        startDate: String
        endDate: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
