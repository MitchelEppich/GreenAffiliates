const gql = require("graphql-tag");

const CREATE = gql`
  mutation($key: String) {
    createCategory(input: { key: $key }) {
      _id
      key
      createdAt
    }
  }
`;

const UPDATE = gql`
  mutation($_id: String, $key: String) {
    updateCategory(input: { _id: $_id, key: $key }) {
      _id
      key
      createdAt
    }
  }
`;

const DELETE = gql`
  mutation($_id: String) {
    deleteCategory(input: { _id: $id }) {
      _id
      key
      createdAt
    }
  }
`;

exports.delete = DELETE;
exports.update = UPDATE;
exports.create = CREATE;
