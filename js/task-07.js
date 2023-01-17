const fontSize = document.getElementById("font-size-control");
const textId = document.getElementById("text");

fontSize.addEventListener("input", rangeValue);
textId.style.fontSize = `55px`;
function rangeValue(event) {
  let i = event.currentTarget.value;
  //console.log(i)

  textId.style.fontSize = `${i}px`;
}

