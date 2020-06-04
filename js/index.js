const display = document.querySelector('.display');
let sign = '';
let memory = 0;
document.querySelectorAll('.numerals button')
  .forEach(button => button.addEventListener('click', digitPressed));
  
  function digitPressed(ev) {
    
    display.value += ev.target.innerText;
  }

document.querySelectorAll('.oper button')
  .forEach(button => button.addEventListener('click', operPressed));

  /*function operPressed(ev) {
    if (sign === '') {
      sign = ev.target.innerText
      display.value += sign;
    } else {
       sign = sign.slice(0, -1)
        
    }
  }*/

document.querySelector('.equal button').addEventListener('click', calculate);

  function calculate() {
      display.value = eval(display.value);
  }

document.querySelector('.func .clear').addEventListener('click', clear);

  function clear() {
      display.value = '';
  }

document.querySelector('.func .mem-in').addEventListener('click', memAdd);

  function memAdd() {
    display.value = eval(display.value);
    memory = parseFloat(display.value);
  }

document.querySelector('.func .mem-out').addEventListener('click', memOut);

  function memOut() {
    display.value += memory.toString();
  }

  document.querySelector('.func .mem-clr').addEventListener('click', memClear);

  function memClear() {
    memory = '';
    
  }