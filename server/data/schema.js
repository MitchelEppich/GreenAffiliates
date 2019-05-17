const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  sendMessage(message: String): String
  sendData(input: DataInput!): String
}

input EmailInput {
  email: String
  type: String
}

input DataInput {
  name: String
  email: String
  message: String
}

type EmailRequest {
  _id: String
  type: String
  email: String
  expireAt: String
}

type Mutation {
  sendEmail(input: EmailInput!): EmailRequest
}
`;

// type Subscription {}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
