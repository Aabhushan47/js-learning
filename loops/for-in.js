const myObject = {
  js: "Javascript",
  py: "python",
  cpp: "C++",
};

for (const key in myObject) {
  //   console.log(`${key} stands for ${myObject[key]}`);
}

const myArray = [11, 22, 34, 45, 53];

for (const key in myArray) {
  console.log(myArray[key]);
}
