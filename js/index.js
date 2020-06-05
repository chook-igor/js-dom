const display = document.querySelector(".display");
let memory = '';

document
  .querySelectorAll(".numerals button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".oper-top button")
  .forEach((button) => button.addEventListener("click", operTopPressed));

function operTopPressed(ev) {
  if (
    display.value.endsWith(".") ||
    display.value.endsWith("(") ||
    display.value.endsWith(")")
     )
    display.value = display.value.slice(0, -1);
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".oper button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(ev) {
  if (
    display.value.endsWith("+") ||
    display.value.endsWith("-") ||
    display.value.endsWith("*") ||
    display.value.endsWith("/")
  )
    display.value = display.value.slice(0, -1);
  display.value += ev.target.innerText;
}

document.querySelector(".equal button").addEventListener("click", calculate);

function calculate() {
  if (display.value.endsWith("/0")) {
    alert("You can't do that");
  } else if (display.value === "") {
    alert("42");
  }
  display.value = eval(display.value);
   if (display.value === 'undefined' || display.value === 'Infinity') display.value = '';
}

document.querySelector(".func .clear").addEventListener("click", clear);

function clear() {
  display.value = "";
}

document.querySelector(".func .clear-last").addEventListener("click", clearLst);

function clearLst() {
  display.value = display.value.slice(0, -1);
}

document.querySelector(".func .mem-in").addEventListener("click", memAdd);

function memAdd() {
  display.value = eval(display.value);
  memory = parseFloat(display.value);
}

document.querySelector(".func .mem-out").addEventListener("click", memOut);

function memOut() {
  display.value += memory.toString();
}

document.querySelector(".func .mem-clr").addEventListener("click", memClear);

function memClear() {
  memory = "";
}