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

// 🏪  Exercise 2
// --------------

// Creating a mutation.

// 1) Create a type definition for the Mutation `createStore`, to create a store.
//    Create an input type `StoreInput`, and use it as first argument of `createStore`.
// 2) Create a resolver function for the Mutation `createStore`.
// 3) Use `yup` in the resolver function to validate the input. (https://github.com/jquense/yup)
// 4) Create a service layer. Create a file `storeService.js` and put all business
//    logic and data base logic in the service layer.
//    This exercise is focussed on GraphQL but in real-life, middleware will
//    validate if the user is authorized (e.g. check the Authorization header).
//    Afterwards the resolver function will validate the input and call the service layer.
// 5) Try out the GraphQL mutation in the GraphQL Playground (🚀 http://localhost:4000/)
// 6) Query the stores, and check if the new store is in the list.
// 7) Extend the store with an address (street, number, postalCode, city) and create a fragment
//    to query it.

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
