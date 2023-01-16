const container = document.getElementById("categories");

const chi = container.children;
console.log(`Number of catigories: ${chi.length}`);

const menuItemsByTagName = document.querySelectorAll(".item");

for (let i = 0; i < menuItemsByTagName.length; i++) {
  console.log(
    `Category: ${menuItemsByTagName[i].firstElementChild.textContent}`
  );
  console.log(
    `Elements: ${menuItemsByTagName[i].querySelectorAll("li").length}`
  );
}
