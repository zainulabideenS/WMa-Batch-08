// Write a js program to print Fibonacci series up to n terms.
function printFibonacciSeries(n) {
    let fibSeries = [];
    
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibSeries.push(a); 
        let next = a + b; 
        a = b; 
        b = next; 
    }

    return fibSeries;
}
const n = prompt("Enter the number of terms for the Fibonacci series:");
const fibonacciSeries = printFibonacciSeries(Number(n));
console.log(`Fibonacci series up to ${n} terms: ${fibonacciSeries.join(', ')}`);