// 29. Write a js program to find last occurrence of a word in a given string.
function change() {
    const str = document.getElementById('input').value;
    const word = document.getElementById('word').value;

    const lastIndex = str.lastIndexOf(word);  // Find the last occurrence of the

    // Display the result
    const resultElement = document.getElementById('result');
    if (lastIndex !== -1) {
        resultElement.textContent = `Last occurrence of "${word}" found at index: ${lastIndex}`;
    } else {
        resultElement.textContent = `The word "${word}" was not found in the string.`;
    }
}
