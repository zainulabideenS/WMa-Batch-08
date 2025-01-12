// Write a js program to check whether a number is Perfect number or not.
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

const number = prompt("Enter a number to check if it is aperfect number:");
const result = isPerfectNumber(Number(number));

if (result) {
    console.log(`${number} is a perfect number.`);
} else {
    console.log(`${number} is not a perfect number.`);
}