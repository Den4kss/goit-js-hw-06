const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsId = document.querySelector("#ingredients");

const ingredientAll = ingredients.map((productName) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = productName;
  return ingredientEl;
});

ingredientsId.append(...ingredientAll);
