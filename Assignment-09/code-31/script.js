// Write a js program to print all Armstrong numbers between 1 to n.
function isArmstrongNumber(num) {
    const strNum = num.toString();
    const numDigits = strNum.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(strNum[i], 10);
        sum += Math.pow(digit, numDigits);
    }

    return sum === num;
}

function printArmstrongNumbersUpTo(n) {
    console.log(`Armstrong numbers between 1 and ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (isArmstrongNumber(i)) {
            console.log(i); 
        }
    }
}

const n = prompt("Enter a number to print all Armstrong numbers up to that number:");
printArmstrongNumbersUpTo(Number(n));