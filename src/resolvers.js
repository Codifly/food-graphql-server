const { UserInputError } = require('apollo-server');
const yup = require('yup');
const data = require('./data');

const uuidSchema = yup.string().min(36).max(36);

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

const getStoreSchema = yup.object()
  .shape({
    id: uuidSchema,
  });

const createReservationSchema = yup.object()
  .shape({
    reservationProducts: yup.array(
      yup.object().shape({
        productId: uuidSchema,
        quantity: yup.number().required().positive().integer(),
      })
    ),
  });

// Resolvers define the technique for fetching the types in the
// schema.
module.exports = {
  Query: {
    stores: () => data.getStores(),
    store: async (parent, input) => {
      try {
        await getStoreSchema.validate(input);
      } catch (e) {
        throw new UserInputError('Invalid input.', { validationErrors: e.errors });
      }
      const { id } = input;
      return data.getStore(id);
    },
  },
  Reservation: {
    reservationProducts: async ({ id }) => {
      return data.getReservationProducts(id);
    }
  },
  Store: {
    products: async ({ id: storeId }) => {
      return data.getStoreProducts(storeId);
    }
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
    },
    createReservation: async (parent, { input }) => {
      try {
        await createReservationSchema.validate(input);
      } catch (e) {
        throw new UserInputError('Invalid input.', { validationErrors: e.errors });
      }
      const { reservationProducts } = input;
      return data.createReservation({ reservationProducts });
    }
  }
};