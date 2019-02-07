const { UserInputError } = require('apollo-server');
const yup = require('yup');
const data = require('./data');

const createStoreSchema = yup.object()
  .shape({
    city: yup.string().max(255),
    name: yup.string().min(1).max(255).required(),
    number: yup
      .number()
      .required()
      .positive()
      .integer(),
    postalCode: yup.string().max(10),
    street: yup.string().max(255),
  });

// Resolvers define the technique for fetching the types in the
// schema.
module.exports = {
  Query: {
    stores: () => data.getStores(),
  },
  Mutation: {
    createStore: async (parent, { input }) => {
      try {
        await createStoreSchema.validate(input);
      } catch (e) {
        throw new UserInputError('Invalid input.', { validationErrors: e.errors });
      }
      const { city, name, number, postalCode, street } = input;
      return data.createStore({ city, name, number, postalCode, street });
    }
  }
};