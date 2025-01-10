// Write a js program to convert Decimal to Binary number system.
function decimalToBinary(decimal) {
    let binary = '';

    // Convert decimal to binary
    if (decimal === 0) {
        return '0'; // Handle the case for 0
    }

    while (decimal > 0) {
        const remainder = decimal % 2; // Get the remainder
        binary = remainder + binary; // Prepend the remainder to the binary string
        decimal = Math.floor(decimal / 2); // Divide the decimal number by 2
    }

    return binary; // Return the binary representation
}

// Example usage:
const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToBinary(Number(decimalNumber));
    console.log(`Binary representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}