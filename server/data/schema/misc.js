let Query = `
  sendMessage(message: String): String
  sendData(input: DataInput!): String
`;

let Mutation = `
  sendEmail(input: EmailInput!): EmailRequest
`;

let Subscription = `
`;

let Type = `
  type EmailRequest {
    _id: String
    type: String
    email: String
    expireAt: String
  }
`;

let Input = `
  input EmailInput {
    email: String
    type: String
  }
  
  input DataInput {
    name: String
    email: String
    message: String
  }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
