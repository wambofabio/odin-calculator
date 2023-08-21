//TODO 1
//add
function add(a, b) {
  return a + b;
}

//subtract
function subtract(a, b) {
  return a - b;
}

//multiply
function multiply(a, b) {
  return a * b;
}

//divide
function divide(a, b) {
  return a / b;
}

// //TODO 2
// let a = 0;
// let b = 0;
// let operator = "";

//TODO 3
// function operate(a, b, operator) {
//   if (operator === "add") {
//     return add(a, b);
//   } else if (operator === "subtract") {
//     return subtract(a, b);
//   } else if (operator === "multiply") {
//     return multiply(a, b);
//   } else if (operator === "divide") {
//     return divide(a, b);
//   }
// }

document.addEventListener("DOMContentLoaded", (event) => {
  let a = null;
  let b = null;
  let operator = null;
  let shouldCompute = false;
  const display = document.getElementById("display");

  function compute(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b !== 0) {
          return a / b;
        } else {
          alert("Cannot divide by zero!");
          return null;
        }
      default:
        return null;
    }
  }

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
      // Number buttons
      if ("0123456789".includes(e.target.innerText)) {
        display.value += e.target.innerText;
      }
      // Operator buttons
      else if (["+", "-", "*", "/"].includes(e.target.innerText)) {
        if (shouldCompute) {
          b = parseFloat(display.value);
          a = compute(a, b, operator);
          display.value = a;
        } else {
          a = parseFloat(display.value);
          shouldCompute = true;
        }
        operator = e.target.innerText;
        display.value = "";
      }
      // Equals button
      else if (e.target.innerText === "=") {
        if (shouldCompute) {
          b = parseFloat(display.value);
          a = compute(a, b, operator);
          display.value = a;
          shouldCompute = false; // Reset for the next operation
        }
      }
      // Clear button
      else if (e.target.innerText === "clear") {
        a = null;
        b = null;
        operator = null;
        shouldCompute = false;
        display.value = "";
      }
    });
  });
});
