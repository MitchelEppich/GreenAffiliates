const gql = require("graphql-tag");

const CREATE = gql`
mutation {
    createGoal(input {
        _id: String
        
    })
}
`;

const UPDATE = gql``;

const DELETE = gql``;

exports.delete = DELETE;
exports.update = UPDATE;
exports.create = CREATE;
