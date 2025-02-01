// 37. Write a js program to trim both leading and trailing white space characters from given string.
function trim() {
    const str = document.getElementById('input').value;

    const trimmedResult = str.trim();

    document.getElementById('result').textContent = `Result: "${trimmedResult}"`;
}