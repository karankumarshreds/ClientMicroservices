import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
  // returns a fake product name
  const name = faker.commerce.productName();
  products += `<li>${name}</li>`;
}

document.querySelector('#dev-products').innerHTML = products;

// Context/Situation #1
/**
 * when we are running this in development / isolation from the container
 * where we are using our local index.html file which definitely has an
 * element with an id of '#dev-products'
 * We probably want to immediately render the content to this id element
 */

// Context/Situation #2
/**
 * we are running this in development/production THROUGH the container app
 * and there is no guarantee that the element with the id #dev-products
 * exists in the container's index.html
 * WE DO NOT WANT TO TRY to immediately render the app
 */
