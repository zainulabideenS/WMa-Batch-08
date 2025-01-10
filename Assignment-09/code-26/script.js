// Write a js program to check whether a number is Prime number or not
function prime(num) {
    // Check if the number is less than 2
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    
    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }
    
    return true; // No factors found, so it's prime
}

function isPrime(){
    const number = document.getElementById("input").value;
const result = prime(Number(number));
const output = document.getElementById("output");
if (result) {
    output.textContent = `${number} is a prime number.`;
} else {
    output.textContent = `${number} is not a prime number.`;
}
}
