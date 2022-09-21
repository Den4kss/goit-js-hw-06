const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsId = document.querySelector("#ingredients");
  const ingredientEl = document.createElement("li");

  ingredientEl.classList.add("item");
  ingredientEl.textContent = `${ingredients[i]}`;
  ingredientsId.append(ingredientEl);
}
