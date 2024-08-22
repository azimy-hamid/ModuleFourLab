// In this exercise you will need to create a calculator.
// Requirements:
// The application should take 2 numbers, and support 4 operations (+, / , x , -) .
// You need to press the equals button to get the result displayed, and reset to clear it.
// NOTE: Do not use the eval() function - it is a security risk and bypasses custom logic.

// 1) List the requirements, in this case you have a total of 4 requirements
// a) Get data (two numbers)
// b) Choose an operator
// c) Get the result
// d) Reset the screen

// 2) Sketch the application, so that you are sure about the correct functioning.
// 3) You may use a flow diagram to help.
// 4) Use a tool of your choice, like Figma, to design the
// application.

// 5) Use the prototype ability and test it.
// Develop the application. Start from GIT - it is good practice to do things in a standard way.
// - Create a repository
// - Clone the repository locally
// - Create a branch for each feature

let result = document.getElementById("result");

let amount;

const resultBtn = document.getElementById("result-btn");
const resetBtn = document.getElementById("reset-btn");

resultBtn.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operation = document.getElementById("operations").value;
  console.log("Clicked");
  switch (operation) {
    case "+":
      amount = parseInt(num1) + parseInt(num2);

      if (!isNaN(amount)) {
        result.value = amount;
      }
      break;

    case "-":
      amount = parseInt(num1) - parseInt(num2);

      if (!isNaN(amount)) {
        result.value = amount;
      }
      break;

    case "*":
      amount = parseInt(num1) * parseInt(num2);

      if (!isNaN(amount)) {
        result.value = amount;
      }
      break;

    case "/":
      amount = parseInt(num1) / parseInt(num2);

      if (!isNaN(amount)) {
        result.value = amount;
      }
      break;

    default:
      result.value = "Choose a valid operation!";
      break;
  }
});

resetBtn.addEventListener("click", () => {
  result.value = "";
});
