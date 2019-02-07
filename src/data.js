const uuid = require('uuid');

const stores = [
  {
    city: 'Aalst',
    id: 'cc406ed9-fc02-4185-b073-8c12b61b5c79',
    name: 'Den Olijfboom',
    number: 38,
    postalCode: '9300',
    street: 'Molenstraat',
  },
  {
    city: 'Aalst',
    id: '5f2919aa-333a-4745-8166-3002ab30de0e',
    name: 'Pizza Talia',
    number: 147,
    postalCode: '9300',
    street: 'Sint Jobstraat',
  }
];

function createStore({ city, name, number, postalCode, street }) {
  const newStore = {
    city,
    id: uuid(),
    name,
    number,
    postalCode,
    street,
  };
  stores.push(newStore);
  return newStore;
}

function getStores() {
  return stores;
}

module.exports = {
  createStore,
  getStores
};