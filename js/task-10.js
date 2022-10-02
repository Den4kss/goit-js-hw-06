function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

// --------
let squaresEl = document.createElement("div");
squaresEl.classList.add("square");
squaresEl.style.width = "40px";
squaresEl.style.height = "40px";
squaresEl.style.backgroundColor = `${getRandomHexColor()}`;

function createBoxes(amount) {
  inputEl.addEventListener("blur", (event) => {
    let inputNam = event.currentTarget.value;

    createEl.addEventListener("click", () => {
      squaresEl.length = Number(inputNam);

      for (let i = 0; i < squaresEl.length; i += 1) {
        console.log(squaresEl);

        boxesEl.append(squaresEl);
      }
    });
  });
}
createBoxes();
