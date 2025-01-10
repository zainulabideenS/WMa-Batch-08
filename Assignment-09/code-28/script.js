// Write a js program to find sum of all prime numbers between 1 to n
function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }
    return true; // No factors found, so it's prime
}

function sumOfPrimesUpTo(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i; // Add the prime number to the sum
        }
    }
    return sum;
}

// Example usage:
const n = prompt("Enter a number to find the sum of all prime numbers up to that number:");
const sum = sumOfPrimesUpTo(Number(n));
console.log(`The sum of all prime numbers between 1 and ${n} is: ${sum}`);