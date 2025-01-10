// Write a js program to find all prime factors of a number.
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

function primeFactors(n) {
    const factors = [];
    
    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        if (!factors.includes(2)) {
            factors.push(2); // Add 2 if it's not already in the list
        }
        n /= 2;
    }

    // n must be odd at this point, so we can skip even numbers
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            if (!factors.includes(i)) {
                factors.push(i); // Add the prime factor if it's not already in the list
            }
            n /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

const number = prompt("Enter a number to find its prime factors:");
const factors = primeFactors(Number(number));
console.log(`The prime factors of ${number} are: ${factors.join(', ')}`);