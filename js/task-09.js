function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
bodyEl.classList.add("body__style");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", function () {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = `${getRandomHexColor()}`;
});
