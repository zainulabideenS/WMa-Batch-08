// 20. Write a js program to count frequency of each character in a string.
function countCharacterFrequency(str) {
    const charCount = {};
    for (const char of str) {
        if (char !== ' ') { 
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    return charCount;
}

function check() {
    const inputString = document.getElementById("input").value;
    const resultElement = document.getElementById("result");

    if (inputString) {
        const frequency = countCharacterFrequency(inputString);
        const formattedResult = Object.entries(frequency)
            .map(([char, count]) => `${char}: ${count}`)
            .join('\n');
        resultElement.textContent = formattedResult;
    } else {
        resultElement.textContent = "Please enter a valid string.";
    }
}