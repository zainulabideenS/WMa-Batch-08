// Write a js program to check whether a number is Prime number or not
function prime(num) {
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
