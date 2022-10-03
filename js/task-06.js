const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", onInputSubmit);

function onInputSubmit(event) {
  if (Number(inputEl.dataset.length) !== event.currentTarget.value.length) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
