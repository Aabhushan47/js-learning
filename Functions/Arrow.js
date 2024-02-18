const user = {
  username: "ram",
  price: 500,

  welcomemessage: function () {
    console.log(`Welcome ${this.username}`);
    console.log(this);
  },
};

// user.welcomemessage();
// user.username = "hari";
// user.welcomemessage();

// console.log(this);

// function hello() {
//   const name = "world";
//   console.log(this.name);
// }
// hello();

const hello = () => {
  const name = "world";
  console.log(this.name);
};
// hello();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));
