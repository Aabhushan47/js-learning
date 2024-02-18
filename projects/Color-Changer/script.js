const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const text = document.querySelector(".text");
const newtext = document.createElement("h2");
text.appendChild(newtext);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    function colorName(color) {
      newtext.innerHTML = `New color is ${color}`;
      body.style.backgroundColor = e.target.id;
    }
    switch (e.target.id) {
      case "grey":
        colorName("grey");
        break;
      case "blue":
        colorName("blue");
        break;
      case "white":
        colorName("white");
        break;
      case "teal":
        colorName("teal");
        break;
      case "yellow":
        colorName("yellow");
        break;
      default:
        break;
    }
  });
});
