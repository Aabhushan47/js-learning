let randomNo = parseInt(Math.random() * 99 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const result = document.querySelector(".lowOrHi");
const prevGuess = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const error = document.querySelector(".error");
const p = document.createElement("p");

let prevResult = [];
let numGuess = 10;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    error.innerHTML = `Please Enter Valid Number`;
  } else if (guess < 1) {
    error.innerHTML = `Dont Enter Less Than 1`;
  } else if (guess > 100) {
    error.innerHTML = `Enter Number Less Than 100`;
  } else {
    prevResult.push(guess);
    if (numGuess == 1) {
      displayGuess(guess);
      displayMessage(`You Lost The Number Was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNo) {
    displayMessage("Yaaaaaaaaaay");
    endGame();
  } else if (guess > randomNo) {
    displayMessage("Guess Lower Number");
  } else if (guess < randomNo) {
    displayMessage("Guess Higher Number");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess},`;
  numGuess--;
  remGuess.innerHTML = `${numGuess}`;
}

function displayMessage(message) {
  result.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  result.appendChild(p);
  p.innerHTML = "Start New Game";
  playGame = false;
  startNewGame();
}

function startNewGame() {
  p.addEventListener("click", (e) => {
    randomNo = parseInt(Math.random() * 99 + 1);
    prevResult = [];
    numGuess = 10;
    userInput.removeAttribute("disabled");
    result.removeChild(p);
    displayMessage("");
    prevGuess.innerHTML = "";
    remGuess.innerHTML = numGuess;
  });
}
