// singleton
//Object.create

//object literals

const mySym = Symbol("mykey");
const JsUser = {
  name: "Aabu",
  Age: 21,
  [mySym]: "key1",
  Location: "Tyanglaphanta",
  lastLogin: ["Monday", "Tuesday"],
};

console.log(JsUser.name); //either
console.log(JsUser["name"]); //or

console.log(typeof JsUser[mySym]);

JsUser.Age = 20;

// Object.freeze(JsUser);

JsUser.Age = 22;

console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Hello user, ${this.name}`);
};

console.log(JsUser.greeting());
