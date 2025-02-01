// 23. Write a js program to remove all occurrences of a character from string.
function removeAllOccurrences(str, charToRemove) {
    const regex = new RegExp(charToRemove, 'g');
    return str.replace(regex, '');
}

function remove() {
    const inputString = document.getElementById("input").value;
    const charToRemove = document.getElementById("char").value;
    const resultElement = document.getElementById("result");

    if (inputString && charToRemove) {
        const result = removeAllOccurrences(inputString, charToRemove);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string and character.";
    }
}