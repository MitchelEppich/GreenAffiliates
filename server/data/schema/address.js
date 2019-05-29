let Query = `
    address(input: GetAddressInput): Address
`;

let Mutation = `
    createAddress(input: AddressInput): Address
    updateAddress(input: AddressInput): Address
    deleteAddress(input: AddressInput): Address
`;

let Subscription = `
`;

let Type = `
    type Address {
        _id: String
        postal: String
        country: String
        state: String
        address: String
        apartment: String
        city: String
        createdAt: String
    }
`;

let Input = `
    input GetAddressInput {
        _id: String
        token: String
    }

    input AddressInput {
        _id: String
        postal: String
        country: String
        state: String
        address: String
        apartment: String
        city: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
