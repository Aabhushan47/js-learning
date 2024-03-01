const insert = document.querySelector("#insert");

window.addEventListener("keypress", function (e) {
  insert.innerHTML = e.key === 0 ? " " : "Space";
});
