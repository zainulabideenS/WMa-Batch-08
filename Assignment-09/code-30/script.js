// Write a js program to check whether a number is Armstrong number or not.
function isArmstrongNumber(num) {
    const strNum = num.toString();
    const numDigits = strNum.length;
    
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(strNum[i], 10); // Get the digit
        sum += Math.pow(digit, numDigits); // Raise to the power and add to sum
    }
    
    return sum === num;
}

const number = prompt("Enter a number to check if it is an Armstrong number:");
const result = isArmstrongNumber(Number(number));

if (result) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}