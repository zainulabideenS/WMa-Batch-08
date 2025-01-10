// Write a js program to find sum of first and last digit of a number
function firstAndLastDigit(n) {
    const num = n.toString();
    const firstDigit = num.charAt(0);
    const lastDigit = num.charAt(num.length - 1);
    const firstDigitNum = parseInt(firstDigit);
    const lastDigitNumb = parseInt(lastDigit);
    const sum = firstDigitNum + lastDigitNumb;
    return sum; 
}
const numberIs = 67891;
const result = firstAndLastDigit(numberIs);
console.log(`Sum of First and last digit : ${result}`);
