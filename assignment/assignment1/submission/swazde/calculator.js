// calculator.js

// Get the display element
const display = document.getElementById("display");

// Add click event listeners to number buttons
const numberButtons = document.querySelectorAll(".btn-num");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentValue = display.value;
    const buttonValue = button.textContent;
    display.value = currentValue === "0" ? buttonValue : currentValue + buttonValue;
  });
});

// Add click event listener to AC button
const acButton = document.getElementById("btn-AC");
acButton.addEventListener("click", () => {
  display.value = "0";
});

// Add click event listener to operator buttons
const operatorButtons = document.querySelectorAll(".btn-operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operator = button.textContent;
    const currentValue = parseFloat(display.value);
    display.dataset.operator = operator;
    display.dataset.firstValue = currentValue;
    display.value = "0";
  });
});

// Add click event listener to equal button
const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", () => {
  const operator = display.dataset.operator;
  const firstValue = parseFloat(display.dataset.firstValue);
  const secondValue = parseFloat(display.value);

  let result;
  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      result = firstValue / secondValue;
      break;
    default:
      return;
  }

  display.value = result;
});
