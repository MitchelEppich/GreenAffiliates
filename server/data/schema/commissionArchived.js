let Query = `
    commissionArchived(input: GetCommissionArchivedInput): CommissionArchived
`;

let Mutation = `
    createCommissionArchived(input: CommissionArchivedInput): CommissionArchived
    updateCommissionArchived(input: CommissionArchivedInput): CommissionArchived
    deleteCommissionArchived(input: CommissionArchivedInput): CommissionArchived
`;

let Subscription = `
`;

let Type = `
    type CommissionArchived {
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
    input GetCommissionArchivedInput {
        _id: String
        token: String
    }

    input CommissionArchivedInput {
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
