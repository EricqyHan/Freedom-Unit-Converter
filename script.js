console.log("Test");

document
  .querySelector("#temperatureSubmit")
  .addEventListener("click", temperatureConvert);
document
  .querySelector("#distanceSubmit")
  .addEventListener("click", distanceConvert);
document
  .querySelector("#weightSubmit")
  .addEventListener("click", weightConvert);
document
  .querySelector("#lengthSubmit")
  .addEventListener("click", lengthConvert);
document
  .querySelector("#volumeSubmit")
  .addEventListener("click", volumeConvert);

function temperatureConvert() {
  let celsius = document.querySelector("#temperature").value;
  let convertedTemp = celsius * 1.8 + 32;
  document.querySelector(".convertedTemperature").innerText = convertedTemp;
}

function distanceConvert() {
  let kilometers = document.querySelector("#distance").value;
  let convertedDistance = kilometers * 0.62137;
  document.querySelector(".convertedDistance").innerText = convertedDistance;
}

function weightConvert() {
  let kilograms = document.querySelector("#weight").value;
  let convertedWeight = kilograms * 2.204;
  document.querySelector(".convertedWeight").innerText = convertedWeight;
}

function lengthConvert() {
  let length = document.querySelector("#length").value;
  let convertedLength = length * 0.3937;
  document.querySelector(".convertedLength").innerText = convertedLength;
}

function volumeConvert() {
  let volume = document.querySelector("#volume").value;
  let convertedVolume = volume * 0.264;
  document.querySelector(".convertedVolume").innerText = convertedVolume;
}
