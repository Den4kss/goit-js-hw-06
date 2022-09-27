const btnSubtractOne = document.querySelector('[data-action="decrement"]');
const btnPlusOne = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

const counterPlugin = function ({ initialValue = 0, step = 1 } = {}) {
  this.value = initialValue;
  this.step = step;
  this.bindEvents();
};

counterPlugin.prototype.bindEvents = function () {
  btnPlusOne.addEventListener("click", () => {
    this.increment();
    this.updateValue();
  });
  btnSubtractOne.addEventListener("click", () => {
    this.decrement();
    this.updateValue();
  });
};

counterPlugin.prototype.updateValue = function () {
  spanValue.textContent = this.value;
};

counterPlugin.prototype.increment = function () {
  this.value += this.step;
  console.log(this.value);
};

counterPlugin.prototype.decrement = function () {
  this.value -= this.step;
};
const counter = new counterPlugin();
