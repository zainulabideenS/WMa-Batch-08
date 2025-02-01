// 32. Write a js program to remove first occurrence of a word from string.
function change() {
    const str = document.getElementById('input').value;
    const word = document.getElementById('word').value;

    const regex = new RegExp(`\\b${word}\\b`, 'g'); 

    const modifiedWord = word.slice(1);
    const result = str.replace(regex, modifiedWord);

    document.getElementById('result').textContent = `Result: "${result}"`;
}