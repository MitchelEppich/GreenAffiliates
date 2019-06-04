const gql = require("graphql-tag");

const CREATE = gql`
  mutation(
    $name: String
    $surname: String
    $email: String
    $phone: String
    $website: String
    $password: String
    $merchant: [MerchantInput]
    $reward: String
    $address: AddressInput
    $token: String
  ) {
    createAffiliate(
      input: {
        name: $name
        surname: $surname
        email: $email
        phone: $phone
        website: $website
        password: $password
        merchant: $merchant
        reward: $reward
        address: $address
        token: $token
      }
    ) {
      _id
      name
      surname
      email
      phone
      website
      password
      merchant {
        _id
        name
        surname
        company
        description
        email
        phone
        website
        password
        address {
          _id
          postal
          country
          state
          address
          apartment
          city
          createdAt
        }
        tracker {
          _id
          rate
          traffic
          status
          dueCommission
          paidCommission
          createdAt
        }
        tier
        goal {
          _id
          type
          amount
          startDate
          endDate
          createdAt
        }
        media {
          _id
          traffic
          views
          createdAt
        }
        product {
          _id
          name
          url
          createdAt
        }
        category {
          _id
          key
          createdAt
        }
        token
        createdAt
      }
      address {
        _id
        postal
        country
        state
        address
        apartment
        city
        createdAt
      }
      reward
      token
      createdAt
    }
  }
`;

const UPDATE = gql`
  mutation(
    $_id: String
    $name: String
    $surname: String
    $email: String
    $phone: String
    $website: String
    $password: String
    $merchant: [MerchantInput]
    $reward: String
    $address: AddressInput
    $token: String
  ) {
    updateAffiliate(
      input: {
        _id: $_id
        name: $name
        surname: $surname
        email: $email
        phone: $phone
        website: $website
        password: $password
        merchant: $merchant
        reward: $reward
        address: $address
        token: $token
      }
    ) {
      _id
      name
      surname
      email
      phone
      website
      password
      merchant {
        _id
        name
        surname
        company
        description
        email
        phone
        website
        password
        address {
          _id
          postal
          country
          state
          address
          apartment
          city
          createdAt
        }
        tracker {
          _id
          rate
          traffic
          status
          dueCommission
          paidCommission
          createdAt
        }
        tier
        goal {
          _id
          type
          amount
          startDate
          endDate
          createdAt
        }
        media {
          _id
          traffic
          views
          createdAt
        }
        product {
          _id
          name
          url
          createdAt
        }
        category {
          _id
          key
          createdAt
        }
        token
        createdAt
      }
      address {
        _id
        postal
        country
        state
        address
        apartment
        city
        createdAt
      }
      reward
      token
      createdAt
    }
  }
`;

const DELETE = gql`
  mutation($_id: String) {
    deleteAffiliate(input: { _id: $_id }) {
      _id
      name
      surname
      email
      phone
      website
      password
      merchant {
        _id
        name
        surname
        company
        description
        email
        phone
        website
        password
        address {
          _id
          postal
          country
          state
          address
          apartment
          city
          createdAt
        }
        tracker {
          _id
          rate
          traffic
          status
          dueCommission
          paidCommission
          createdAt
        }
        tier
        goal {
          _id
          type
          amount
          startDate
          endDate
          createdAt
        }
        media {
          _id
          traffic
          views
          createdAt
        }
        product {
          _id
          name
          url
          createdAt
        }
        category {
          _id
          key
          createdAt
        }
        token
        createdAt
      }
      address {
        _id
        postal
        country
        state
        address
        apartment
        city
        createdAt
      }
      reward
      token
      createdAt
    }
  }
`;

exports.delete = DELETE;
exports.create = CREATE;
exports.update = UPDATE;
