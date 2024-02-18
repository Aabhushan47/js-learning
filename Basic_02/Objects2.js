// const netflix = new Object()

const User = {
  email: "khanalaabu@gmail.com",
  fullName: {
    firstname: "Ram",
    lastname: "Sherpa",
  },
};

// console.log(User.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// const obj = console.log(obj3);

//object inside array
const userInsta = [
  {
    name: "a",
    email: "ram@a.com",
  },
  {
    name: "a",
    email: "ram@a.com",
  },
  {
    name: "a",
    email: "ram@a.com",
  },
];

// console.log(userInsta[0].email);

// console.log(User);

// console.log(Object.keys(User));
// console.log(Object.values(User));

// console.log(User.hasOwnProperty("email"));

const Course = {
  name: "Js",
  price: 223,
  instructor: "aaa",
};

// console.log(Course.instructor);
//destructuring

const { name, price, instructor } = Course;
console.log(price);

//json
// {
//   "name": "Js",
//   "price": 223,
//   "instructor": "aaa",
// }
