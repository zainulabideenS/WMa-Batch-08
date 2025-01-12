// Write a js program to print all Perfect numbers between 1 to n.
function isPerfectNumber(num) {
    if (num <= 1) {
        return false; 
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    }

    return sum === num;
}

function printPerfectNumbersUpTo(n) {
    console.log(`Perfect numbers between 1 and ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (isPerfectNumber(i)) {
            console.log(i); 
        }
    }
}

const n = prompt("Enter a number to print all perfect numbers up to that number:");
printPerfectNumbersUpTo(Number(n));