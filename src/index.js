const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

// ⚽️  Goal
// --------

// We want to create a webapp to reserve products (food).
// Some ingredients we need: a store, products and reservations.
// First of all we want a list of stores. After we have chosen
// a store, we get a list of products (query) of that store.
// We pick some products, pick a quantity, and we make a reservation (mutation)

// 🏪  Exercise 3
// --------------

// Now we want to display the products for a store, we can select the quantity of each product,
// and make a reservation.

// 1) Create a Query `store` to retrieve a store by id. Extend the data store to find the right store.
// 2) Create a list of products with a reference (storeId).
// 3) Extend the Store type with a list of products. A product has a price, name and description.
//    `products` becomes a field of the store. Add a resolver function to get the products of a store.
// 4) Go to the GraphQL Playground and use a directive to query a store with or without products,
//    name the variable `withProducts`.

// 1) Check: https://graphql.org/learn/queries/#variables
// 4) products @include(if: $withProducts) {

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server. Existing apps
// can utilize middleware options.
server.listen()
  .then(({ url }) => {
    console.log(`🚀  Food GraphQL Server ready at ${url}.
⛄️  Go to this url to play with GraphQL in the GraphQL Playground.`);
  });
