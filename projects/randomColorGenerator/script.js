let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

//generate random hex code

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let colorChager = document.querySelector("body");
let changerId;

const startChangingColor = function () {
  changerId = setInterval(changeColor, 2000);

  function changeColor() {
    colorChager.style.backgroundColor = randomColor();
  }
};

function stopChangingColor() {
  clearInterval(changerId);
}

start.addEventListener("click", startChangingColor);

stop.addEventListener("click", stopChangingColor);
