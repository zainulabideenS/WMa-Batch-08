// Write a js program to print all Perfect numbers between 1 to n.
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

function printPerfectNumbersUpTo(n) {
    console.log(`Perfect numbers between 1 and ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (isPerfectNumber(i)) {
            console.log(i); // Print the perfect number
        }
    }
}

// Example usage:
const n = prompt("Enter a number to print all perfect numbers up to that number:");
printPerfectNumbersUpTo(Number(n));