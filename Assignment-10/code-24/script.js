// 24. Write a js program to remove all repeated characters from a given string.
function removeRepeatedCharacters(str) {
    const charCount = {};
    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (const char of str) {
        if (charCount[char] === 1) {
            result += char;
        }
    }

    return result;
}

function remove() {
    const inputString = document.getElementById("input").value;
    const resultElement = document.getElementById("result");

    if (inputString) {
        const result = removeRepeatedCharacters(inputString);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string.";
    }
}