const uuid = require('uuid');

const stores = [
  {
    id: 'cc406ed9-fc02-4185-b073-8c12b61b5c79'
    name: 'Den Olijfboom',
  },
  {
    id: '5f2919aa-333a-4745-8166-3002ab30de0e',
    name: 'Pizza Talia'
  }
];

export function createStore({ name }) {
  const newStore = { id: uuid(), name };
  stores.push(newStore);
  return newStore;
}

export function getStores() {
  return stores;
}