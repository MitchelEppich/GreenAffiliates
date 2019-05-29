const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const Misc = require("./misc");

let imports = [
  Misc
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
  ${definitions.Query != null ? "type Query {" +
    definitions.Query +
  "}" : ""}

  ${definitions.Subscription != null ? "type Subscription {" +
    definitions.Subscription +
  "}" : ""}
  
  ${definitions.Type || ""}
  
  ${definitions.Filter || ""}

  ${definitions.Input || ""}

  ${definitions.Other || ""}

  ${definitions.Mutation != null ? "type Mutation {" +
    definitions.Mutation
  + "}" : ""}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
