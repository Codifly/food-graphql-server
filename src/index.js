const { ApolloServer, gql } = require('apollo-server');

// ⚽️  Goal
// --------

// We want to create a webapp to reserve products (food).
// Some ingredients we need: a store, products and reservations.
// First of all we want a list of stores. After we have chosen
// a store, we get a list of products (query) of that store.
// We pick some products, pick a quantity, and we make a reservation (mutation)

// 🏪  Exercise 1
// --------------

// 1) First we create two files. One for our type definitions, `typeDefs.js`,
//    and one for our resolver functions, `resolvers.js`.
// 2) Create a GraphQL type definition for our store. A store has an id and a name.
// 3) Create a Query `stores` to get a list of stores.
// 4) Create a resolver function that returns the list of stores.
// 5) Try out the GraphQL query in the GraphQL Playground (🚀 http://localhost:4000/)

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Query {
    test: String
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = {
};

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
