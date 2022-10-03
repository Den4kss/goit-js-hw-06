const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formNameEl = event.target.elements;
  if (
    formNameEl.email.value.length > 0 &&
    formNameEl.password.value.length > 0
  ) {
    const data = {
      email: formNameEl.email.value,
      password: formNameEl.password.value,
    };
    console.log(data);
    formEl.reset();
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
});
