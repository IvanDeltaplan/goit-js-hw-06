function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColor = document.querySelector(".color");

const changeBtn = document.querySelector(".change-color");
changeBtn.addEventListener("click", currentNumber);
function currentNumber(event) {
  let i = getRandomHexColor();
  spanColor.textContent = i;
  document.body.style.backgroundColor = i;
}
