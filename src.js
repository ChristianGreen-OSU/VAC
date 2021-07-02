let PLACEHOLDER = '.counter-display';

let counterPlusElem = document.querySelector('.button1');
let conterDisplayElem = document.querySelector(PLACEHOLDER);
let count = 0;

counterPlusElem.addEventListener("click",()=>{
  counter++;
  updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}
