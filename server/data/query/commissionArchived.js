const gql = require("graphql-tag");

const CREATE = gql`
mutation($amount:Float, $percent:Int, $affiliate: String, $merchant:String, $status:Int) {
  createCommissionArchived(input: {amount:$amount, percent:$percent, affiliate:$affiliate, merchant:$merchant, status:$status}) {
    _id
    amount
    percent
    status
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
    affiliate {
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
    createdAt
  }
}
`

const UPDATE = gql`
mutation($_id:String, $amount:Float, $percent:Int, $affiliate: String, $merchant:String, $status:Int) {
  updateCommissionArchived(input: {_id:$_id, amount:$amount, percent:$percent, affiliate:$affiliate, merchant:$merchant, status:$status}) {
    _id
    amount
    percent
    status
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
    affiliate {
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
    createdAt
  }
}
`

const DELETE = gql`
mutation($_id:String) {
  deleteCommissionArchived(input: {_id:$_id}) {
    _id
    amount
    percent
    status
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
    affiliate {
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
    createdAt
  }
}
`

exports.delete = DELETE
exports.update = UPDATE
exports.create = CREATE