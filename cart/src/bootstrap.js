import faker from 'faker';

export const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart-unique-id');
  if (el) {
    mount(el);
  }
}
