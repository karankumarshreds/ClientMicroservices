import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart`;

document.querySelector('#dev-cart').innerHTML = cartText;
