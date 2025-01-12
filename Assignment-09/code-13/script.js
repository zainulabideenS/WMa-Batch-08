// Write a js program to swap first and last digits of a number.

function swapFirstAndLastDigit(n) {
    const num = n.toString();
    const firstDigit = num.charAt(0);
    const lastDigit = num.charAt(num.length - 1);
    const middleDigits = num.slice(1, num.length - 1);
    const swappedNumber = lastDigit + middleDigits + firstDigit;
    return parseInt(swappedNumber);
}       
const numberIs = 67893;
const result = swapFirstAndLastDigit(numberIs);
console.log(`Swapped Number : ${result}`);

