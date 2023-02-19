import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// When we are running this file in development in isolation.
// In this senareo we are using index.html file
// which DEFNITELY has an element with id of '#dev-products'.
// WE WANT to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't hava an element with id 'dev-products'
  const el = document.querySelector('#dev-products');
  if (el) {
    // If true, We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// When we are running this file in development or production
// through the container app
// NO GUARANTEE that an element with id of '#dev-products' exists.
// WE DON'T WANT TRY to immwidately render the app.

export { mount };
