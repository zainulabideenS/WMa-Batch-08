// Write a js program to check whether a number is Perfect number or not.
function isPerfectNumber(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not perfect numbers
    }

    let sum = 0;

    // Find all divisors and sum them
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; // Add the divisor to the sum
        }
    }

    // Check if the sum of divisors equals the original number
    return sum === num;
}

// Example usage:
const number = prompt("Enter a number to check if it's a perfect number:");
const result = isPerfectNumber(Number(number));

if (result) {
    console.log(`${number} is a perfect number.`);
} else {
    console.log(`${number} is not a perfect number.`);
}