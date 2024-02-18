const coding = ["js", "c", "cpp", "py"];

coding.forEach((a) => {
  //   console.log(a);
});

// function Hello(value) {
//   console.log(value);
// }

// coding.forEach(Hello);

// coding.forEach((element,index,array)=>{

// })

coding.forEach((a, i, v) => {
  // console.log(a);
  // console.log(i);
  // console.log(v);
});

const myCoding = [
  {
    language: "javascript",
    extension: "js",
  },
  {
    language: "python",
    extension: "py",
  },
  {
    language: "java",
    extension: "java",
  },
];
myCoding.forEach((index) => {
  console.log(index.extension);
});
