// Write a js program to find lowest frequency character in a string.
function findLowestFrequencyCharacter(str) {
    const charCount = {};
    for (const char of str) {
        if (char !== ' ') { // Ignore spaces
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    let minChar = null;
    let minCount = Infinity;

    for (const char in charCount) {
        if (charCount[char] < minCount) {
            minCount = charCount[char];
            minChar = char;
        }
    }

    return minChar;
}

function check() {
    const inputString = document.getElementById("input").value;
    const resultElement = document.getElementById("result");

    if (inputString) {
        const result = findLowestFrequencyCharacter(inputString);
        resultElement.textContent = result ? `The lowest frequency character is: '${result}'` : "No valid characters found.";
    } else {
        resultElement.textContent = "Please enter a valid string.";
    }
}