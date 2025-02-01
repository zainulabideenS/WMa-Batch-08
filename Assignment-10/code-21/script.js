// 21. Write a js program to remove first occurrence of a character from string.
function removeFirstOccurrence(str, charToRemove) {
    const index = str.indexOf(charToRemove);
    if (index === -1) {
        return str; 
    }
    return str.slice(0, index) + str.slice(index + 1);
}

function check() {
    const inputString = document.getElementById("input").value;
    const charToRemove = document.getElementById("char").value;
    const resultElement = document.getElementById("result");

    if (inputString && charToRemove) {
        const result = removeFirstOccurrence(inputString, charToRemove);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string and character.";
    }
}