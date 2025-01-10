// Write a js program to calculate factorial of a number.
function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers.";
    let result = 1; // Initialize result to 1

    for (let i = 1; i <= num; i++) {
        result *= i; // Multiply result by i
    }

    return result; // Return the final result
}
function factorialIterative(){
    const userInput =document.getElementById("input").value;
const number = parseInt(userInput);

if (!isNaN(number) && number >= 0) {
    const result = factorial(number);
    const output =  document.getElementById("output");
    output.textContent = `The factorial of ${number} is: ${result}`;
} else {
    output.textContent = "Please enter a valid non-negative integer.";
}
}

