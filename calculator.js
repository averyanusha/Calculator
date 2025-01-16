const display = document.getElementById("display");
// const numberButtons = document.querySelectorAll(".button-number");
// const numArray = Array.from(numberButtons);
// const numbers = numArray.values();
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const dot = document.getElementById("dot");
const plusMinus = document.getElementById("plusminus");

const clear = document.getElementById("clear");

const arr = [];

// display.innerText = localStorage.getItem("value");

// function humanInput(a){
//   let amount;
//   if (localStorage !== null){
//     localStorage.setItem('value', a);
//   } else {
//     amount = JSON.parse(localStorage.getItem("value"));
//   }
//   display.innerText = localStorage.getItem("value");
// }

function clearDisplay() {
  arr.splice(1, 1);
  humanInput();
}

function humanInput() {
  let number = arr.join("")
  display.innerText = number;
  console.log(number);
}

function addition (){
  let sum = arr.reduce((total, curr) => {
    return (total + curr);
  }, 0);
  display.innerText = sum;
}

function multiplication (){
  let sum = arr.reduce((total, curr) => {
    return (total * curr);
  }, 1);
  display.innerText = sum;
  console.log(sum);
}
one.addEventListener('click', () => {
  arr.push(1);
  humanInput();
});
two.addEventListener('click', () => {
  arr.push(2);
  humanInput();
});
three.addEventListener('click', () => {
  arr.push(3)
  humanInput();
});

clear.addEventListener('click', () => {
  clearDisplay();
})

add.addEventListener('click', () => {
  addition();
})

multiply.addEventListener('click', () => {
  multiplication();
})