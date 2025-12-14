let currentNumber = '';
let operator = '';
let previousNumber = '';

const result = document.getElementById('result');

function appendNumber(number) {
  currentNumber += number;
  result.value = currentNumber;
}

function setOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let res = 0;
  switch (operator) {
    case '+':
      res = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      res = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      res = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      res = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  result.value = res;
  currentNumber = res;
  previousNumber = '';
  operator = '';
}

function clearDisplay() {
  currentNumber = '';
  operator = '';
  previousNumber = '';
  result.value = '';
}
