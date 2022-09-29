const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const outputEl = document.querySelector("#name-output");
console.log(outputEl);
inputEl.addEventListener("input", onInputSubmit);

function onInputSubmit(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length > 0) {
    return (outputEl.textContent = event.currentTarget.value);
  } else {
    return (outputEl.textContent = "Anonymous");
  }
}
