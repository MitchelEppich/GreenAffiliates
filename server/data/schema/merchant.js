let Query = `
    merchant(input: GetMerchantInput): Merchant
`;

let Mutation = `
    createMerchant(input: MerchantInput): Merchant
    updateMerchant(input: MerchantInput): Merchant
    deleteMerchant(input: MerchantInput): Merchant
`;

let Subscription = `
`;

let Type = `
    type Merchant {
        _id: String
        name: String
        surname: String
        company: String
        description: String
        category: Category
        email: String
        phone: String
        website: String
        password: String
        product: [Product]
        media: [Media]
        goal: [Goal]
        tracker: [Tracker]
        tier: [Int]
        address: [Address]
        token: String    
        createdAt: String
    }
`;

let Input = `
    input GetMerchantInput {
        _id: String
        token: String
    }

    input MerchantInput {
        _id: String
        name: String
        surname: String
        company: String
        description: String
        category: CategoryInput
        email: String
        phone: String
        website: String
        password: String
        product: [ProductInput]
        media: [MediaInput]
        goal: [GoalInput]
        tracker: [TrackerInput]
        tier: [Int]
        address: [AddressInput]
        token: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
