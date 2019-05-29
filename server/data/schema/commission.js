let Query = `
    commission(input: GetCommissionInput): Commission
`;

let Mutation = `
    createCommission(input: CommissionInput): Commission
    updateCommission(input: CommissionInput): Commission
    deleteCommission(input: CommissionInput): Commission
`;

let Subscription = `
`;

let Type = `
    type Commission {
        _id: String
        amount: Float
        percent: Int
        affiliate: Affiliate
        merchant: Merchant
        status: Int
        createdAt: String
    }
`;

let Input = `
    input GetCommissionInput {
        _id: String
        token: String
    }

    input CommissionInput {
        _id: String
        amount: Float
        percent: Int
        affiliate: String
        merchant: String
        status: Int
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
