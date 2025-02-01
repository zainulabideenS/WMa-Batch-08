// 36. Write a js program to trim trailing white space characters from given string.
function remove() {
    const str = document.getElementById('input').value;

    // Trim trailing whitespace characters
    const trimmedResult = str.replace(/\s+$/, '');

    // Display the result
    document.getElementById('result').textContent = `Result: "${trimmedResult}"`;
}