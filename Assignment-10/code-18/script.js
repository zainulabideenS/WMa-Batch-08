// 18. Write a js program to find highest frequency character in a string.
function highestFrequencyCharacter(str) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of str) {
        if (char !== ' ') { // Ignore spaces
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    // Find the character with the highest frequency
    let maxChar = '';
    let maxCount = 0;

    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

function check() {
    const inputString = document.getElementById("input").value;
    const resultElement = document.getElementById("result");

    if (inputString) {
        const result = highestFrequencyCharacter(inputString);
        resultElement.textContent = `The highest frequency character is: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string.";
    }
}
