const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
const arrayList = [];
let string = "";

for (let i = 0; i < ingredients.length; i++) {
  const lastItem = document.createElement("li");

  lastItem.classList.add(".item");

  lastItem.textContent = ingredients[i];

  arrayList.push(lastItem);
}
arrayList.forEach((element) => {
  list.append(element);
  console.log(element);
});
