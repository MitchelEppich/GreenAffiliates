const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const Misc = require("./misc");
const Address = require("./address");
const Affiliate = require("./affiliate");
const Commission = require("./commission");
const CommissionArchived = require("./commissionArchived");
const Goal = require("./goal");
const Media = require("./media");
const Merchant = require("./merchant");
const Message = require("./message");
const Product = require("./product");
const Tracker = require("./tracker");
const Category = require("./category");

let imports = [
  Misc,
  Address,
  Affiliate,
  Commission,
  CommissionArchived,
  Goal,
  Media,
  Merchant,
  Message,
  Product,
  Tracker,
  Category
];

let definitions = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  let $ = Object.keys(_);

  for (let x of $) {
    let value = _[x];
    if (value == undefined || value.trim().length == 0) continue;
    if (definitions[x] == null) definitions[x] = "";
    definitions[x] += value;
  }
}

let typeDefs = `
  ${definitions.Query != null ? "type Query {" + definitions.Query + "}" : ""}

  ${
    definitions.Subscription != null
      ? "type Subscription {" + definitions.Subscription + "}"
      : ""
  }
  
  ${definitions.Type || ""}
  
  ${definitions.Filter || ""}

  ${definitions.Input || ""}

  ${definitions.Other || ""}

  ${
    definitions.Mutation != null
      ? "type Mutation {" + definitions.Mutation + "}"
      : ""
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
