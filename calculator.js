function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
  let result = 0;

  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
    default:
      result = null;
  }

  return result;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  const number = parseInt(button.textContent);
  button.addEventListener("click", (e) => displayNumberToScreen(number));
});

const screen = document.querySelector(".screen");
let displayValue = 0;

function displayNumberToScreen(number) {
  if (screen.textContent.length < 9) {
    screen.textContent += String(number);
    displayValue = parseInt(screen.textContent);
  }
}
