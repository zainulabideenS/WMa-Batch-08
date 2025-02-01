// 27. Write a js program to replace all occurrences of a character with another in a string.
function replaceAllOccurrences(str, charToReplace, replacementChar) {
    const regex = new RegExp(charToReplace, 'g');
    return str.replace(regex, replacementChar);
}

function change() {
    const inputString = document.getElementById("input").value;
    const charToReplace = document.getElementById("char").value;
    const replacementChar = document.getElementById("newchar").value;
    const resultElement = document.getElementById("result");

    if (inputString && charToReplace && replacementChar) {
        const result = replaceAllOccurrences(inputString, charToReplace, replacementChar);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string and characters.";
    }
}