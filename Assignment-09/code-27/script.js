function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

function printPrimesUpTo(n) {
    console.log(`Prime numbers between 1 and ${n}:`);
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i); 
        }
    }
}

const n = prompt("Enter a number to print all prime numbers up to that number:");
printPrimesUpTo(Number(n));