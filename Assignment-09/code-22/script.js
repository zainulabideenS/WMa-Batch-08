// Write a js program to find all factors of a number.
function factor(num) {
    const factors = []; // Array to hold the factors

    // Loop through all numbers from 1 to num
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) { // Check if i is a factor of num
            factors.push(i); // Add i to the factors array
        }
    }

    return factors;
}
function findFactors(){
    const userInput = document.getElementById('input').value;
const number = parseInt(userInput);

if (!isNaN(number) && number > 0) {
    const factors = factor(number);
    const output = document.getElementById('output');
    output.textContent = `The factors of ${number} are: ${factors.join(', ')}`;
} else {
    output.textContent = 'Please enter a valid number.';
}
}

