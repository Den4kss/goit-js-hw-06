const categoriesEl = document.querySelector("#categories");

const itemsEl = categoriesEl.children;
console.log(`Number of categories: ${itemsEl.length}`);

for (let i = 0; i < itemsEl.length; i += 1) {
  const categoryEl = itemsEl[i].querySelector("h2");
  const petsEl = itemsEl[i].querySelectorAll("li");

  console.log(`Category: ${categoryEl.textContent}`);

  console.log(`Elements: ${petsEl.length}`);
}
