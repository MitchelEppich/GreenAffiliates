let Query = `
    tracker(input: GetTrackerInput): Tracker
`;

let Mutation = `
    createTracker(input: TrackerInput): Tracker
    updateTracker(input: TrackerInput): Tracker
    deleteTracker(input: TrackerInput): Tracker
`;

let Subscription = `
`;

let Type = `
    type Tracker {
        _id: String
        affiliate: Affiliate
        merchant: Merchant
        rate: Float
        traffic: Int
        status: Int
        dueCommission: Float
        paidCommission: Float
        createdAt: String
    }
`;

let Input = `
    input GetTrackerInput {
        _id: String
        token: String
    }

    input TrackerInput {
        _id: String
        affiliate: String
        merchant: String
        rate: Float
        traffic: Int
        status: Int
        dueCommission: Float
        paidCommission: Float
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
