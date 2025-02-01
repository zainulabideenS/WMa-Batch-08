// 30. Write a js program to search all occurrences of a word in given string.
function change() {
    const str = document.getElementById('input').value.replace(/\s+/g, ''); // Remove spaces
    const word = document.getElementById('word').value.replace(/\s+/g, ''); // Remove spaces
    const indices = [];
    let index = str.indexOf(word);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(word, index + 1);
    }
    const resultElement = document.getElementById('result');
    if (indices.length > 0) {
        resultElement.textContent = `All occurrences of "${word}" found at indices: ${indices.join(', ')}`;
    } else {
        resultElement.textContent = `The word "${word}" was not found in the string.`;
    }
}