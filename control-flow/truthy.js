const username = [];

if (username) {
  console.log(`logged in`);
} else {
  console.log("not logged in");
}

//falsy(0,-0,false,BigInt(0n),null,undefined,"",Nan)
//truthy("0"," ","false",{},[],function(){})
//array empty check

if (username.length === 0) {
  console.log("empty");
}

//object empty check
const emptyObject = { 1: "2" };

if (Object.keys(emptyObject).length == 0) {
  console.log("empty");
} else {
  console.log("not empty");
}
