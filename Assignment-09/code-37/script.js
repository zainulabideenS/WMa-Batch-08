// Write a js program to find one's complement of a binary number
function onesComplement(binary) {
    let complement = '';

    // Iterate through each bit in the binary number
    for (let i = 0; i < binary.length; i++) {
        // Flip the bit
        if (binary[i] === '0') {
            complement += '1';
        } else if (binary[i] === '1') {
            complement += '0';
        } else {
            throw new Error("Invalid binary number"); // Handle invalid input
        }
    }

    return complement;
}

// Example usage:
const binaryNumber = prompt("Enter a binary number:");
try {
    const result = onesComplement(binaryNumber);
    console.log(`One's complement of ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error(error.message);
}