// Write a js program to check whether a number is Strong number or not
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // 0! and 1! are both 1
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i; // Calculate factorial
    }
    return fact;
}

function isStrongNumber(num) {
    const strNum = num.toString();
    let sum = 0;

    // Calculate the sum of the factorials of the digits
    for (let i = 0; i < strNum.length; i++) {
        const digit = parseInt(strNum[i], 10);
        sum += factorial(digit); // Add the factorial of the digit to the sum
    }

    // Check if the sum of the factorials equals the original number
    return sum === num;
}

// Example usage:
const number = prompt("Enter a number to check if it's a Strong number:");
const result = isStrongNumber(Number(number));

if (result) {
    console.log(`${number} is a Strong number.`);
} else {
    console.log(`${number} is not a Strong number.`);
}