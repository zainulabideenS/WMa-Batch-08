// Write a js program to print all Strong numbers between 1 to n.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

function isStrongNumber(num) {
    const strNum = num.toString();
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        const digit = parseInt(strNum[i], 10);
        sum += factorial(digit); 
    }

    return sum === num;
}

function printStrongNumbersUpTo(n) {
    console.log(`Strong numbers between 1 and ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (isStrongNumber(i)) {
            console.log(i); 
        }
    }
}

const n = prompt("Enter a number to print all Strong numbers up to that number:");
printStrongNumbersUpTo(Number(n));