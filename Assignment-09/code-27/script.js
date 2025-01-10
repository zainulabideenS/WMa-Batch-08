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

function printPrimesUpTo(n) {
    console.log(`Prime numbers between 1 and ${n}:`);
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i); // Print the prime number
        }
    }
}

// Example usage:
const n = prompt("Enter a number to print all prime numbers up to that number:");
printPrimesUpTo(Number(n));