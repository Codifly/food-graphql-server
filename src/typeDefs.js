const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
module.exports = gql`
  scalar DateTime

  # Comments in GraphQL are defined with the hash (#) symbol.

  type Product {
    description: String
    id: ID
    name: String
    price: Float
  }

  # This "Store" type can be used in other type declarations.
  type Store {
    city: String
    id: ID
    name: String
    number: Int
    postalCode: String
    products: [Product]
    street: String
  }

  type ReservationProduct {
    product: Product
    quantity: Int
  }

  type Reservation {
    date: DateTime
    id: ID
    reservationProducts: [ReservationProduct]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    stores: [Store]
    store(id: ID): Store
  }

  input StoreInput {
    city: String
    name: String!
    number: Int
    postalCode: String
    street: String
  }

  input ReservationProductInput {
    productId: ID
    quantity: Int
  }

  input ReservationInput {
    reservationProducts: [ReservationProductInput]
  }

  type Mutation {
    createStore(input: StoreInput): Store
    createReservation(input: ReservationInput): Reservation
  }
`;