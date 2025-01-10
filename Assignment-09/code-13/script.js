// // Write a js program to find sum of first and last digit of a number
// function firstAndLastDigit(n) {
//     const num = n.toString();
//     const firstDigit = num.charAt(0);
//     const lastDigit = num.charAt(num.length - 1);
//     const firstDigitNum = parseInt(firstDigit);
//     const lastDigitNumb = parseInt(lastDigit);
//     const sum = firstDigitNum + lastDigitNumb;
//     return sum; 
// }
// const numberIs = 67891;
// const result = firstAndLastDigit(numberIs);
// console.log(`Sum of First and last digit : ${result}`);
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

