const data = require('./data');

// Resolvers define the technique for fetching the types in the
// schema.
module.exports = {
  Query: {
    stores: () => data.getStores(),
  },
};