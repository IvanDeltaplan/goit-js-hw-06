const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const lastItem = document.createElement("li");
  lastItem.classList.add(".item");
  lastItem.textContent = ingredients[i];
  list.append(lastItem);
}
console.log(list);
