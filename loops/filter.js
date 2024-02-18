const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let counter = 0;
const ValidArray = arr.filter((item) => {
  if (Number.isFinite(item.id) && item.id != 0) {
    return item;
  }
  counter++;
});

console.log(ValidArray);
console.log("invalid:", counter);
