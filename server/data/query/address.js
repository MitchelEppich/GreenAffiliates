const gql = require("graphql-tag");

const CREATE = gql`
  mutation(
    $postal: String
    $country: String
    $state: String
    $address: String
    $apartment: String
    $city: String
  ) {
    createAddress(
      input: {
        postal: $postal
        country: $country
        state: $state
        address: $address
        apartment: $apartment
        city: $city
      }
    ) {
      _id
      postal
      country
      state
      address
      apartment
      city
      createdAt
    }
  }
`;

const UPDATE = gql`
  mutation(
    $_id: String
    $postal: String
    $country: String
    $state: String
    $address: String
    $apartment: String
    $city: String
  ) {
    updateAddress(
      input: {
        _id: $_id
        postal: $postal
        country: $country
        state: $state
        address: $address
        apartment: $apartment
        city: $city
      }
    ) {
      _id
      postal
      country
      state
      address
      apartment
      city
      createdAt
    }
  }
`;

const DELETE = gql`
  mutation($_id: String) {
    deleteAddress(input: { _id: $_id }) {
      _id
      postal
      country
      state
      address
      apartment
      city
      createdAt
    }
  }
`;

exports.delete = DELETE;
exports.create = CREATE;
exports.update = UPDATE;
