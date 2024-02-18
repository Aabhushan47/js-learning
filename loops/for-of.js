const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  // console.log(greet);
}

//maps
const map = new Map();
map.set("NP", "Nepal");
map.set("GER", "Germany");
map.set("ESP", "Spain");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

//for of dont work on object
// const myObject = {
//   game1: "valo",
//   game2: "cs",
// };

// for (const key of myObject) {
//   console.log(key);
// }
