//const form = document.getElementById("name-input");

const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", textOutput)
function textOutput (event) {

output.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';}

;