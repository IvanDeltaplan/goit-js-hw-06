const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.getElementById("ingredients");
// const arrayList = [];
// let string = "";

// for (let i = 0; i < ingredients.length; i++) {
//   const lastItem = document.createElement("li");

//   lastItem.classList.add(".item");

//   lastItem.textContent = ingredients[i];  
//   //arrayList.push(lastItem);

// //list.append(arrayList);

const listUl = document.getElementById("ingredients");

const ingridientsStr = ingredients.map(ingridient => {
  return `<li class = "item">${ingridient}</li>`
}).join("");
console.log(ingridientsStr);
listUl.insertAdjacentHTML("beforeend", ingridientsStr);