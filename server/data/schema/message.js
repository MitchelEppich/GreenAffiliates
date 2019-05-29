let Query = `
    message(input: GetMessageInput): Message
`;

let Mutation = `
    createMessage(input: MessageInput): Message
    updateMessage(input: MessageInput): Message
    deleteMessage(input: MessageInput): Message
`;

let Subscription = `
`;

let Type = `
    type Message {
        _id: String
        body: String
        replyTo: Message
        affiliate: Affiliate
        merchant: Merchant
        createdAt: String
    }
`;

let Input = `
    input GetMessageInput {
        _id: String
        token: String
    }

    input MessageInput {
        _id: String
        body: String
        replyTo: String
        affiliate: [String]
        merchant: [String]
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
