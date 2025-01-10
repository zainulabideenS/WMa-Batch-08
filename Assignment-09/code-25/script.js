// Write a js program to find LCM of two numbers.
function findGCD(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2; // Remainder
        num1 = temp; // Update num1
    }
    return num1;
}

function findLCM(num1, num2) {
    return (num1 * num2) / findGCD(num1, num2);
}
function lcm(){
    const userInput1 = document.getElementById("input").value;
const userInput2 = document.getElementById("input1").value;

const number1 = parseInt(userInput1, 10);
const number2 = parseInt(userInput2, 10);

if (!isNaN(number1) && !isNaN(number2) && number1 > 0 && number2 > 0) {
    const lcm = findLCM(number1, number2);
    const result = document.getElementById("output");
    result.textContent = `The LCM of ${number1} and ${number2} is: ${lcm}`;
} else {
    result.textContent = "Please enter valid positive integers.";
}
}
