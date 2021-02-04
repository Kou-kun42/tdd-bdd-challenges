const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should get the right areas", function () {
  const area1 = utils.area(2, 3);
  const area2 = utils.area(1, 1);
  const area3 = utils.area(5, 0);
  expect(area1, area2, area3).to.be.a("number");
  expect(area1).to.equal(6);
  expect(area2).to.equal(1);
  expect(area3).to.equal(0);
});

it("should get the right perimeters", function () {
  const peri1 = utils.perimeter(2, 3);
  const peri2 = utils.perimeter(1, 1);
  const peri3 = utils.perimeter(36, 42);
  expect(peri1, peri2, peri3).to.be.a("number");
  expect(peri1).to.equal(10);
  expect(peri2).to.equal(4);
  expect(peri3).to.equal(156);
});

it("should get area of the circles", function () {
  const cirArea1 = utils.circleArea(4);
  const cirArea2 = utils.circleArea(1);
  const cirArea3 = utils.circleArea(42);
  expect(cirArea1, cirArea2, cirArea3).to.be.a("number");
  expect(cirArea1).to.equal(Math.pow(4, 2) * Math.PI);
  expect(cirArea2).to.equal(Math.pow(1, 2) * Math.PI);
  expect(cirArea3).to.equal(Math.pow(42, 2) * Math.PI);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
});

it("Should create a new (object) Item with name and price", function () {
  const item = utils.createItem("apple", 0.99);
  expect(item).to.be.a("object");
  expect(item).to.have.property("name", "apple");
  expect(item).to.have.property("price", 0.99);
  expect(item).to.have.property("quantity", 1);
});

it("Should return the number of items in the cart", function () {
  const numItems = utils.getNumItemsInCart();
  expect(numItems).to.be.a("number");
  expect(numItems).to.equal(0);
});

it("Should add a new item to the shopping cart", function () {
  const item = utils.createItem("apple", 0.99);
  utils.addItemToCart(item);
  expect(utils.getNumItemsInCart()).to.equal(1);
});

it("Should return an array containing all items in cart", function () {
  const item = utils.createItem("apple", 0.99);
  utils.addItemToCart(utils.createItem("apple", 0.99));
  const cart = utils.getShoppingCart();
  expect(cart).to.be.an("array");
  expect(cart[0]).to.have.deep.property("name", "apple");
  expect(cart[0]).to.have.deep.property("quantity", 1);
});

it("Should add to the quantity", function () {
  const item = utils.createItem("apple", 0.99);
  utils.addItemToCart(item);
  expect(utils.getNumItemsInCart()).to.equal(1);
  utils.addItemToCart(item);
  expect(utils.getNumItemsInCart()).to.equal(2);
  const cart = utils.getShoppingCart();
  expect(cart[0].quantity).to.equal(2);
});

it("Should remove items from cart", function () {
  const item = utils.createItem("apple", 0.99);
  utils.addItemToCart(item);
  utils.addItemToCart(item);
  expect(utils.getNumItemsInCart()).to.equal(2);
  utils.removeItemFromCart(item);
  expect(utils.getNumItemsInCart()).to.equal(1);
  let cart = utils.getShoppingCart();
  expect(cart[0]).to.have.deep.property("name", "apple");
  expect(cart[0]).to.have.deep.property("quantity", 1);
  utils.removeItemFromCart(item);
  cart = utils.getShoppingCart();
  expect(cart.length).to.equal(0);
  expect(utils.getNumItemsInCart()).to.equal(0);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function () {
  const apple = utils.createItem("apple", 1.99);
  const banana = utils.createItem("banana", 0.99);
  utils.addItemToCart(apple);
  utils.addItemToCart(apple);
  utils.addItemToCart(banana);
  utils.addItemToCart(apple);
  expect(utils.getNumItemsInCart()).to.equal(4);
  cart = utils.getShoppingCart();
  expect(cart.length).to.equal(2);
  expect(cart[0]).to.have.deep.property("name", "apple");
  expect(cart[0]).to.have.deep.property("quantity", 3);
  expect(cart[1]).to.have.deep.property("name", "banana");
  expect(cart[1]).to.have.deep.property("quantity", 1);
});

it("Should validate that an empty cart has 0 items", function () {
  const apple = utils.createItem("apple", 1.99);
  const banana = utils.createItem("banana", 0.99);
  utils.addItemToCart(apple);
  utils.addItemToCart(apple);
  utils.addItemToCart(banana);
  utils.addItemToCart(apple);
  utils.removeItemFromCart(apple);
  utils.removeItemFromCart(banana);
  utils.removeItemFromCart(apple);
  utils.removeItemFromCart(apple);
  expect(utils.getNumItemsInCart()).to.equal(0);
  cart = utils.getShoppingCart();
  expect(cart.length).to.equal(0);
});

it("Should return the total cost of all items in the cart", function () {
  const apple = utils.createItem("apple", 1.99);
  const banana = utils.createItem("banana", 0.99);
  utils.addItemToCart(apple);
  utils.addItemToCart(apple);
  utils.addItemToCart(banana);
  utils.addItemToCart(apple);
  expect(utils.getTotal()).to.equal(1.99 * 3 + 0.99);
});
