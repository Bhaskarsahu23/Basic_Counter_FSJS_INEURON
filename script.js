const number = document.getElementById('number');

function decrease() {
  number.innerText = Number(number.innerText) - 1;
}

function increase() {
  number.innerText = Number(number.innerText) + 1;
}
