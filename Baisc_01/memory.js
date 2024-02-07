// stack(primitive) copy of data is given (no change in original value)
let myname = "Ram";

let anothername = myname;

console.log(anothername);

anothername = "Hari";

console.log(myname);
console.log(anothername);

// heap reference to the data is passed(change in original value also)

let user1 = {
  name: "hari",
  add: "tyangla",
};

let user2 = user1;

user2.add = "Lalitpur";

console.log(user2);
console.log(user1);
