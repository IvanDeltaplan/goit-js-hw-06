function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.getElementById("controls")
const boxesEl = document.getElementById("boxes");

controlsEl.addEventListener("input", amount)
function amount(event){
  let digits = event.currentTarget.value;
  console.log(digits)  
}