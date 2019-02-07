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

const products = [{
  description: 'Een broodje om u tegen te zeggen. Lekker, lekker, lekker!',
  id: '9e3de707-8e96-45c8-8c1a-75d79fe74768',
  name: 'Scampi Manis',
  price: 5,
  storeId: 'cc406ed9-fc02-4185-b073-8c12b61b5c79',
}, {
  description: 'Eentje met kaas en fricandon, voor den groten honger.',
  id: '1535f2a6-4341-4db0-a9c8-455c2347dcaf',
  name: 'Gitaar',
  price: 5,
  storeId: 'cc406ed9-fc02-4185-b073-8c12b61b5c79',
}, {
  description: 'Tomatensaus, kaas, ham, salami, champignons, paprika',
  id: '5bb3fbcc-7ec2-44fe-a04b-a0251cecf1e6',
  name: '4 Seizoenen Large',
  price: 17,
  storeId: '5f2919aa-333a-4745-8166-3002ab30de0e',
}, {
  description: 'Bolognaisesaus, kaas, paprika, ham, salami, champignons',
  id: '037e74f6-ae73-47a3-9acf-d1de0cdcd565',
  name: 'Calzone Large',
  price: 17,
  storeId: '5f2919aa-333a-4745-8166-3002ab30de0e',
}, {
  description: 'Tomatensaus, pepperoni, rode ui, paprika gehakt, jalapenos',
  id: 'e8619184-2e86-4db5-b8ba-596720006a0f',
  name: 'Hot \'n Spicy',
  price: 20,
  storeId: '5f2919aa-333a-4745-8166-3002ab30de0e',
}];

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

function getStore(storeId) {
  return stores.find((s) => s.id === storeId);
}

function getStores() {
  return stores;
}

function getStoreProducts(storeId) {
  return products.filter((p) => p.storeId === storeId)
} 

module.exports = {
  createStore,
  getStore,
  getStores,
  getStoreProducts
};