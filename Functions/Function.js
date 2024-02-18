// function addNumber(a, b) {
//   sum = a + b;
//   console.log(sum);
// }

function addNumber(a, b) {
  let sum = a + b;
  return sum;
}
const sum = addNumber(2, 3);
// console.log("sum:", sum);

function loginUserMessage(username = "You") {
  if (!username) {
    console.log("please enter correct detail");
    return;
  }
  return `${username} just logged in`;
}
// const message = loginUserMessage("Ram");
// console.log(message);

// console.log(loginUserMessage());

function totalCartPrice(...num1) {
  return num1;
}

// console.log(totalCartPrice(200, 400, 500));
//object
const user = {
  username: "Aabu",
  age: "20",
};

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user);

handleObject({
  username: "ram",
  age: "22",
});

//arrays

const myNewArray = ["ram", "hari", "shyam"];

function handleArray(anyarray) {
  console.log(`name are ${anyarray[0]},${anyarray[1]} and ${anyarray[2]}`);
}
handleArray(myNewArray);

let x = 10;
{
  console.log(x);
  let x = 20;
  console.log(x);
}
