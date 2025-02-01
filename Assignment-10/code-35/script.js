// 35. Write a js program to trim leading white space characters from given string.
function remove() {
    const str = document.getElementById('input').value;

    const trimmedResult = str.replace(/^\s+/,'');

    document.getElementById('result').textContent = `Result: "${trimmedResult}"`;
}