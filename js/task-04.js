let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", clickCounter)

function clickCounter (event){

    counterValue -= 1;
    // console.log(counterValue)
    console.log(document.getElementById("value").textContent=`${counterValue}`);
}

incrementBtn.addEventListener("click", clickCounter2)

function clickCounter2 (event){

    counterValue += 1;
    // console.log(counterValue)
    console.log(document.getElementById("value").textContent=`${counterValue}`);
}



   
