// Write a js program to print Pascal triangle upto n rows
function printPascalsTriangle(n) {
    const triangle = [];

    for (let row = 0; row < n; row++) {
        // Create a new row
        triangle[row] = [];
        for (let col = 0; col <= row; col++) {
            // The first and last elements of each row are 1
            if (col === 0 || col === row) {
                triangle[row][col] = 1;
            } else {
                // Each element is the sum of the two elements above it
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
            }
        }
    }

    // Print the triangle
    for (let row = 0; row < n; row++) {
        console.log(triangle[row].join(' '));
    }
}

// Example usage:
const n = parseInt(prompt("Enter the number of rows for Pascal's Triangle:"));
if (n > 0) {
    printPascalsTriangle(n);
} else {
    console.log("Please enter a positive integer.");
}