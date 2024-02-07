//Arrays
const myArray = [0, 1, 2, true, "ram", 3, 4, 5];

const myArr = new Array(0, 1, 2, 3, 4, 5);

// console.log(myArray[3]);

//methods

// myArr.push(6);
// myArr.push(2);
// myArr.pop();

// myArr.unshift(2);
// myArr.shift();

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);(string)

//slice(donot manipulate original array) and splice(manipulate original array)

console.log("A", myArr);

let newA1 = myArr.slice(1, 3);
console.log(newA1);
console.log("B", myArr);

let newA2 = myArr.splice(1, 3);
console.log(newA2);
console.log("C", myArr);
