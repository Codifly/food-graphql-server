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

// 🏪  Exercise 4
// --------------

// Now we will focus on creating a reservation, which looks like this:
// { id, date, reservationProducts: { product: { id, name price }, quantity })).

// 1) Create a Mutation to create a reservation `createReservation`
//    that takes an object as input. The input type is named `ReservationInput`.
//    ReservationInput contains a list of { productId, quantity } (input type is named `ReservationProductInput`),
//    named `reservationProducts` (field of `ReservationInput`).
// 2) Now create a resolver function for the mutation and insert it into our in-memory database.
// 3) Create a query field reservationProducts under Reservation, to get the reservationProducts [{ product, quantity }].
//    Similar as stores under Query.
// 4) Go to the GraphQL Playground and try out the createReservation mutation!

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
