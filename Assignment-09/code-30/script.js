// Write a js program to check whether a number is Armstrong number or not.
function isArmstrongNumber(num) {
    // Convert the number to a string to easily access each digit
    const strNum = num.toString();
    const numDigits = strNum.length;
    
    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(strNum[i], 10); // Get the digit
        sum += Math.pow(digit, numDigits); // Raise to the power and add to sum
    }
    
    // Check if the sum is equal to the original number
    return sum === num;
}

// Example usage:
const number = prompt("Enter a number to check if it's an Armstrong number:");
const result = isArmstrongNumber(Number(number));

if (result) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}