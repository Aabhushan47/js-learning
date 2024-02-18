const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const text = document.querySelector(".text");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    function colorName() {
      newtext = document.createElement("h2");
      text.appendChild(newtext);
      newtext.innerHTML = `New color is ${e.target.id}`;
    }
    switch (e.target.id) {
      case "grey":
        colorName();
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        colorName();
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        colorName();
        body.style.backgroundColor = e.target.id;
        break;
      case "teal":
        colorName();
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        colorName();
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});

// newtext = document.createElement("h2");
// container.appendChild(newtext);
// newtext.innerHTML = `The color is`;
