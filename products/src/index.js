import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
  // returns a fake product name
  const name = faker.commerce.productName();
  products += `<li>${name}</li>`;
}

console.log(products);
