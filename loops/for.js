// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best");
//   }

//   console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`Outer loop : ${i}`);
//   for (let j = 0; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//array

// let myArray = ["ram", "lakshman", "Sita"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// break and continue

// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log("5 detected");
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
