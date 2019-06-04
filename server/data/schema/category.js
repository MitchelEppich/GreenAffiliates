let Query = `
    category(input: CategoryInput): Category
`;

let Mutation = `
    createCategory(input: CategoryInput): Category
    updateCategory(input: CategoryInput): Category
    deleteCategory(input: CategoryInput): Category
`;

let Subscription = `
`;

let Type = `
    type Category {
        _id: String
        key: String
        createdAt: String
    }
`;

let Input = `
    input CategoryInput {
        _id: String
        key: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
