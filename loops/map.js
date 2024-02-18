const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((num) => {
//   return num + 10;
// });

// newNumbers = [];

// myNumbers.forEach((num) => {
//   newNumbers.push(num + 10);
//   return newNumbers;
// });

const newNumbers = myNumbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num < 60;
  });

console.log(newNumbers);
