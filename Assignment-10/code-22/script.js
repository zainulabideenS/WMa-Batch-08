// 22. Write a js program to remove last occurrence of a character from string.
function removeLastOccurrence(str, charToRemove) {
    const index = str.lastIndexOf(charToRemove);
    if (index === -1) {
        return str; // Character not found, return original string
    }
    // Remove the character at the found index
    return str.slice(0, index) + str.slice(index + 1);
}

function remove(){
    const inputString = document.getElementById("input").value;
    const charToRemove = document.getElementById("char").value;
    const resultElement = document.getElementById("result");

    if (inputString && charToRemove) {
        const result = removeLastOccurrence(inputString, charToRemove);
        resultElement.textContent = `Result: '${result}'`;
    } else {
        resultElement.textContent = "Please enter a valid string and character.";
    }
}