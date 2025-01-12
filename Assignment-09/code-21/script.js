// Write a js program to find power of a number using for loop
function power(base, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base; // Multiply result by base in each iteration
    }

    return result;
}

function convert(){
    const base = document.getElementById("input").value;
    const exponent =document.getElementById("input1").value;

const baseNumber = parseFloat(base);
const exponentNumber = parseInt(exponent, 10);

if (!isNaN(baseNumber) && !isNaN(exponentNumber) && exponentNumber >= 0) {
    const result = power(baseNumber, exponentNumber);
    const output = document.getElementById("output");
    output.textContent = `${baseNumber} raised to the power of ${exponentNumber} is: ${result}`;    
} else {
    output.textContent = "Please enter a valid number and exponent";
}
}
