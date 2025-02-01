// 33. Write a js program to remove last occurrence of a word in given string.
function change() {
    const str = document.getElementById('input').value;
    const word = document.getElementById('word').value;

    const regex = new RegExp(`\\b${word}\\b`, 'g'); 

    const modifiedWord = word.slice(0, -1); // Remove the last character
    const result = str.replace(regex, modifiedWord);

    document.getElementById('result').textContent = `Result: "${result}"`;
}