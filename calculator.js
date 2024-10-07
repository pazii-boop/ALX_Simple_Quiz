// Step 1: Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Function to perform the calculation based on the operation
function performCalculation(operation) {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  let result;
  if (operation === "add") {
    result = add(number1, number2);
  } else if (operation === "subtract") {
    result = subtract(number1, number2);
  } else if (operation === "multiply") {
    result = multiply(number1, number2);
  } else if (operation === "divide") {
    result = divide(number1, number2);
  }

  // Display the result
  document.getElementById("calculation-result").textContent = result;
}

// Step 2: Attach event listeners to the buttons
document.getElementById("add").addEventListener("click", function () {
  performCalculation("add");
});

document.getElementById("subtract").addEventListener("click", function () {
  performCalculation("subtract");
});

document.getElementById("multiply").addEventListener("click", function () {
  performCalculation("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
  performCalculation("divide");
});
