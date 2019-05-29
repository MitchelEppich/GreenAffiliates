let Query = `
    media(input: GetMediaInput): [Media]
`;

let Mutation = `
    createMedia(input: MediaInput): Media
    updateMedia(input: MediaInput): Media
    deleteMedia(input: MediaInput): Media
`;

let Subscription = `
`;

let Type = `
    type Media {
        _id: String
        traffic: Int
        views: Int
        createdAt: String
    }
`;

let Input = `
    input GetMediaInput {
        _id: String
        token: String
    }

    input MediaInput {
        _id: String
        traffic: Int
        views: Int
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
