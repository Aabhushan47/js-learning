//immediately invoked function expressions(enclose function in bracket and call it)

(function hello() {
  console.log(`World`);
})();

((name) => {
  console.log(`world2 ${name}`);
})("aabu");
