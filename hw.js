// ======================================== Exploring Conditional Statements and Loops ====================================
let isLoggedin = false;
let products = {
  Pasta: 2.99,
  Eggs: 3.99,
  "Orange Juice": 6.99,
};
let cart = {};

console.log("Welcome to this simple online shopping experience!");
console.log("List of products:");
for (let [product, price] of Object.entries(products)) {
  console.log(`${product}, $${price}`);
}

function addToCart(productName) {
  if (isLoggedin) {
    cart[productName] = products[productName];
    console.log(`You've added ${productName} to your add.`);
  } else {
    console.log("You are not logged in so you can't add items to your cart.");
  }
}

function cartTotal(obj) {
  prices = Object.values(obj);
  console.log(prices.reduce((acc, curr) => acc + curr, 0));
}
addToCart(products);
isLoggedin = true;
addToCart("Eggs");
addToCart("Pasta");
cartTotal(cart);

// ======================================== Exploring Functions in JavaScript ====================================

balance = 100;

function deposit(num) {
  balance += num;
  console.log("Deposit made!");
}

function withdrawal(num) {
  if (balance - num >= 0) {
    balance -= num;
    console.log("Withdrawal made!");
  } else {
    console.log(
      "You don't have enough money in your account to make this withdrawal."
    );
  }
}

function checkBalance(account) {
  console.log(account);
}
checkBalance(balance);
deposit(22);
checkBalance(balance);
withdrawal(100);
checkBalance(balance);
withdrawal(23);
checkBalance(balance);
