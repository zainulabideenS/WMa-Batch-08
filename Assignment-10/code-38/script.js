// 38. Write a js program to remove all extra blank spaces from given string.
function remove() {
    const str = document.getElementById('input').value;

    // Remove extra spaces: trim leading/trailing and replace multiple spaces with a single space
    const result = str.trim().replace(/\s+/g, ' ');

    // Display the result
    document.getElementById('result').textContent = `Result: "${result}"`;
}