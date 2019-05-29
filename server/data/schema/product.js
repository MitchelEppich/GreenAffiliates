let Query = `
    product(input: GetProductInput): Product
`;

let Mutation = `
    createProduct(input: ProductInput): Product
    updateProduct(input: ProductInput): Product
    deleteProduct(input: ProductInput): Product
`;

let Subscription = `
`;

let Type = `
    type Product {
        _id: String
        name: String
        url: String
        createdAt: String
    }
`;

let Input = `
    input GetProductInput {
        _id: String
        token: String
    }

    input ProductInput {
        _id: String
        name: String
        url: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
