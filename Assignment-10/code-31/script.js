// 31. Write a js program to count occurrences of a word in a given string.
function change() {
    const str = document.getElementById('input').value;
    const word = document.getElementById('word').value;

    const count = str.split(/\s+/).filter(w => w.toLowerCase() === word.toLowerCase()).length;

    document.getElementById('result').textContent = `The word "${word}" occurs ${count} time(s) in the string.`;
}
