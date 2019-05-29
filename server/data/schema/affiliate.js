let Query = `
    affiliate(input: GetAffiliateInput): Affiliate
`;

let Mutation = `
    createAffiliate(input: AffiliateInput): Affiliate
    updateAffiliate(input: AffiliateInput): Affiliate
    deleteAffiliate(input: AffiliateInput): Affiliate
`;

let Subscription = `
`;

let Type = `
    type Affiliate {
        _id: String
        name: String
        surname: String
        email: String
        phone: String
        website: String
        password: String
        merchant: [Merchant]
        reward: String
        address: Address
        token: String
        createdAt: String
    }
`;

let Input = `
    input GetAffiliateInput {
        _id: String
        token: String
    }

    input AffiliateInput {
        _id: String
        name: String
        surname: String
        email: String
        phone: String
        website: String
        password: String
        merchant: [MerchantInput]
        reward: String
        address: AddressInput
        token: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
