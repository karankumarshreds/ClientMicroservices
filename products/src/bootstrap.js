import faker from 'faker';

// decided where we want to mount the products
// inside of the index.html
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    // returns a fake product name
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
/**
 * when we are running this in development / isolation from the container
 * where we are using our local index.html file which definitely has an
 * element with an id of '#dev-products'
 * We probably want to immediately render the content to this id element
 *
 * *************** HOW DO WE DECIDE WE ARE IN ISOLATION ****************
 * There is only one way of telling that we are in isolation or container
 * and that is we have a totally unique element id in our local index.html
 * and we refer to that particular ID
 */
// this environment is coming from the webpack config for the product project
if (process.env.NODE_ENV === 'development') {
  // we can be in situation number two
  // and still be in the development mode
  const el = document.querySelector('#dev-products-unique-id');
  // assuming the container app does not have this id
  // and this id is unique for our local service/project
  if (el) {
    mount(el);
  }
}

// Context/Situation #2
/**
 * we are running this in development/production THROUGH the container app
 * and there is no guarantee that the element with the id #dev-products
 * exists in the container's index.html
 * WE DO NOT WANT TO TRY to immediately render the app
 * This should solely depend on the contianer application where  and how it
 * wants to render the contents on the screen in its own index.html file
 * //////////// how to we solve this then? //////////////
 * We simply export this mount funtion and let the container decide where
 * it wants to mount our jsx on his screen
 */
