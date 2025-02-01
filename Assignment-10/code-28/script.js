// 28. Write a js program to find first occurrence of a word in a given string.
function findFirstOccurrence(str, word) {
    const index = str.indexOf(word);
    return index !== -1 ? index : "Word not found"; // Return index or not found message
}

function change(){
    const inputString = document.getElementById("input").value;
    const wordToFind = document.getElementById("word").value;
    const resultElement = document.getElementById("result");

    if (inputString && wordToFind) {
        const result = findFirstOccurrence(inputString, wordToFind);
        resultElement.textContent = `First occurrence of '${wordToFind}' is at index: ${result}`;
    } else {
        resultElement.textContent = "Please enter a valid string and word.";
    }
}