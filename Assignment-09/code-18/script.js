// Write a js program to find frequency of each digit in a given integer.
function digitFrequency(num) {
    // Convert the number to a string
    const numStr = num.toString();
    
    // Create an object to hold the frequency of each digit
    const frequency = {};

    // Loop through each character in the string
    for (let char of numStr) {
        // Check if the character is a digit
        if (/\d/.test(char)) {
            // If the digit is already in the frequency object, increment its count
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
        }
    }

    return frequency;
}

const number = 123321456;
const result = digitFrequency(number);
console.log(result);