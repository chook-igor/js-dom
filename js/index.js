const display = document.querySelector('.display');

document.querySelectorAll('.numerals button')
  .forEach(button => button.addEventListener('click', digitPressed));

  function digitPressed(ev) {
    display.value += ev.target.innerText;
  }

  document.querySelectorAll('.oper button')
  .forEach(button => button.addEventListener('click', operPressed));

  function operPressed(ev) {
    display.value += ev.target.innerText;
  }

  document.querySelector('.equal').addEventListener('click', calculate);

  function calculate() {
      display.value = eval(display.value);
  }