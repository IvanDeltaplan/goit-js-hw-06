const fontSize = document.getElementById("font-size-control");
const textId = document.getElementById("text");

fontSize.addEventListener("input", rangeValue);
function rangeValue(event) {
  let i = event.currentTarget.value;

  textId.style.fontSize = `${i}px`;
}
