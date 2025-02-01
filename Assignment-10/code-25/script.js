// 25. Write a js program to replace first occurrence of a character with another in a string.
function replaceFirstOccurrence(str, charToReplace, replacementChar) {
    const index = str.indexOf(charToReplace);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + replacementChar + str.slice(index + 1);
}

function change() {
    const inputString = document.getElementById("input").value;
    const charToReplace = document.getElementById("char").value;
    const replacementChar = document.getElementById("newchar").value;
    const resultElement = document.getElementById("result");

    if (inputString && charToReplace && replacementChar) {
        const result = replaceFirstOccurrence(inputString, charToReplace, replacementChar);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string and characters.";
    }
}