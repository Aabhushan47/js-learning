//block scope(inside curly braces)
//global scope(outside)

// let a = 30;

if (true) {
  let a = 20;
  const b = 30;
  var c = 90;
  console.log("value", a);
}

// console.log(a);
// console.log(b);
console.log(c);

//nested scope

function one() {
  const username = "aabu";

  function two() {
    const pass = "1234";
    console.log(username); //inherit property of parent
  }
  // console.log(pass); //donot inherit property of child
  two();
}
one();

if (true) {
  const username = "aabu";
  if (username == "aabu") {
    const website = "youtube";
    console.log(`${username} ${website}`);
  }
  // console.log(website);(err)
}
// console.log(username);(err)

// function can be called before define
console.log(addone(5));
function addone(num) {
  return (num += 1);
}

// variable cant be called before define
const addtwo = function (num) {
  return (num += 2);
};

console.log(addtwo(6));
