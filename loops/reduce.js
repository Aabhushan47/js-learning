const myNum = [2, 5, 6];

const newNum = myNum.reduce((ac, curr) => {
  return ac + curr;
}, 0);

// console.log(newNum);

const shoppingCart = [
  {
    itemname: "js",
    price: 999,
    no: 2,
  },
  {
    itemname: "react",
    price: 1999,
    no: 5,
  },
  {
    itemname: "flutter",
    price: 2999,
    no: 3,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.no * item.price;
}, 0);

console.log(totalPrice);
