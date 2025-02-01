// 34. Write a js program to remove all occurrence of a word in given string.
function change() {
    const str = document.getElementById('input').value;
    const word = document.getElementById('word').value;

    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'g' for global, 'i' for case-insensitive

    const result = str.replace(regex, '').trim();

    document.getElementById('result').textContent = `Result: "${result}"`;
}