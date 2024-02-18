// const score = 300;

// if (score >= 300) {
//   let power = "fly";
//   console.log(`The score is:${power}`);
// }

// const balance = 1000;

// if (balance < 500)

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromGithub = false;

if (userLoggedIn && debitcard) {
  if (loggedInFromGithub || loggedInFromGoogle) {
    console.log("logged in");
  }
}

//null coalescing operators(??)(null undefined)(return rhs value if lhs value is null or undefined(falsy value also))

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 100;
// val1 = undefined ?? 1;

console.log(`value:${val1}`);

//ternary operator(condition ? true : false;)

const temperature = 90;

temperature > 95 && temperature < 98
  ? console.log("fever")
  : temperature == 98
  ? console.log("little fever")
  : console.log("no fever");
