// Write a js program to print Fibonacci series up to n terms.
function printFibonacciSeries(n) {
    let fibSeries = [];
    
    // First two Fibonacci numbers
    let a = 0, b = 1;

    // Generate Fibonacci series up to n terms
    for (let i = 0; i < n; i++) {
        fibSeries.push(a); // Add the current number to the series
        let next = a + b; // Calculate the next number
        a = b; // Update a to the next number
        b = next; // Update b to the next number
    }

    return fibSeries;
}

// Example usage:
const n = prompt("Enter the number of terms for the Fibonacci series:");
const fibonacciSeries = printFibonacciSeries(Number(n));
console.log(`Fibonacci series up to ${n} terms: ${fibonacciSeries.join(', ')}`);