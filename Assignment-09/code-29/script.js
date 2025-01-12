// Write a js program to find all prime factors of a number.
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

function primeFactors(n) {
    const factors = [];
        while (n % 2 === 0) {
        if (!factors.includes(2)) {
            factors.push(2);
        }
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            if (!factors.includes(i)) {
                factors.push(i); 
            }
            n /= i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

const number = prompt("Enter a number to find its prime factors:");
const factors = primeFactors(Number(number));
console.log(`The prime factors of ${number} are: ${factors.join(', ')}`);