const form = document.querySelector("form");
const text = document.createElement("h5");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height == "" || height == 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid height ${height}`;
  } else if (weight == "" || weight == 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid height ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      result.innerHTML = `Your BMI is ${BMI} (UnderWeight)`;
    } else if (18.6 <= BMI <= 24.9) {
      result.innerHTML = `Your BMI is ${BMI} (Normal Weight)`;
    } else {
      result.innerHTML = `Your BMI is ${BMI} (OverWeight)`;
    }
  }
});
