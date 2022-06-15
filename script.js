const unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-content");
const volumeEl = document.getElementById("volume-content");
const massEl = document.getElementById("mass-content");

convertBtn.addEventListener("click", function () {
  /*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
  let inputNumber = Number(unitInput.value);

  let calcFeet = inputNumber * 3.281;
  let calcMeter = inputNumber / 3.281;

  let calcLiters = inputNumber / 3.785;
  let calcGallons = inputNumber * 3.785;

  let calcKilo = inputNumber * 2.205;
  let caclPound = inputNumber / 2.205;

  lengthEl.textContent = `${inputNumber} meters = ${calcFeet.toFixed(
    3
  )} feet | ${inputNumber} feet = ${calcMeter.toFixed(3)} meters`;

  volumeEl.textContent = `${inputNumber} liters = ${calcLiters.toFixed(
    3
  )} gallons | ${inputNumber} gallons = ${calcGallons.toFixed(3)} liters`;

  massEl.textContent = `${inputNumber} kilos = ${calcKilo.toFixed(
    3
  )} pounds | ${inputNumber} pounds = ${caclPound.toFixed(3)} kilos`;
});
