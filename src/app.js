import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const randomNumbers = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const arrValue = (arr) => {
  return arr[randomNumbers(arr)]
}

const excuseGenerator = () => {
  return arrValue(who) + arrValue(action) + arrValue(what) + arrValue(when)
}
console.log(excuseGenerator())

const excuseDiv = document.getElementById('excuse')

// no me quede conforme y quise hacer una excusa diferente con un metodo de los q aprendimos en clase //
const sources = [who, action, what, when]
const excuseWithReduce = () =>
  sources.reduce((acc, arr) => acc + arrValue(arr), '');
console.log("Reduce:", excuseWithReduce());
//-------------------------------------------------------------------//

window.onload = function () {
  //write your code here
  excuseDiv.innerHTML = excuseGenerator();
  console.log("Hello Rigo from the console!");
};
//aqui el botón extra para generar esa excusa
const btnGenrator = document.getElementById('generador');
btnGenrator.addEventListener('click', () => {
  excuseDiv.innerHTML = excuseGenerator();
});
