// Write a js program to print all Strong numbers between 1 to n.
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

function printStrongNumbersUpTo(n) {
    console.log(`Strong numbers between 1 and ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (isStrongNumber(i)) {
            console.log(i); // Print the Strong number
        }
    }
}

// Example usage:
const n = prompt("Enter a number to print all Strong numbers up to that number:");
printStrongNumbersUpTo(Number(n));