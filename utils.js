// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello";
};

const area = (w, h) => {
  return w * h;
};

const perimeter = (w, h) => {
  return w * 2 + h * 2;
};

const circleArea = (r) => {
  return Math.PI * Math.pow(r, 2);
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
  shoppingCart.length = 0;
};

const createItem = (name, price) => {
  return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
  return shoppingCart;
};

const addItemToCart = (item) => {
  let exists = false;
  for (var i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === item.name) {
      exists = true;
      shoppingCart[i].quantity++;
    }
  }
  if (!exists) {
    shoppingCart.push(item);
  }
};

const getNumItemsInCart = () => {
  let numItems = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    numItems += shoppingCart[i].quantity;
  }
  return numItems;
};

const removeItemFromCart = (item) => {
  for (var i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === item.name) {
      shoppingCart[i].quantity--;
      if (shoppingCart[i].quantity === 0) {
        if (i === 0) {
          shoppingCart.shift();
        } else {
          shoppingCart.splice(i, i);
        }
      }
    }
  }
};

const getTotal = () => {
  let total = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
};

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getTotal,
};
