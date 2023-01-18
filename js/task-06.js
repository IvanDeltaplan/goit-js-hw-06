const refs = {
    inputText: document.getElementById("validation-input")
}
const dataLength = Number(refs.inputText.dataset.length)
refs.inputText.addEventListener("blur",onFormText);

function onFormText(event){
if (event.currentTarget.value.trim().length === dataLength){
    refs.inputText.classList.add('valid');
    refs.inputText.classList.remove('invalid');
}
else {
    refs.inputText.classList.add('invalid');
    refs.inputText.classList.remove('valid');
}
}