// Write a js program to find first and last digit of a number.
function firstAndLastDigit(n) {
    const num = n.toString();
    const firstDigit = num.charAt(0);
    const lastDigit = num.charAt(num.length - 1);
    const firstDigitNum = parseInt(firstDigit);
    const lastDigitNumb = parseInt(lastDigit);
    return(
        {
            firstDigit : firstDigitNum,
            lastDigit : lastDigitNumb
        }
    )    
}
const numberIs = 67890;
const result = firstAndLastDigit(numberIs);
console.log(`first Digit is : ${result.firstDigit} and last Digit is : ${result.lastDigit}`);
