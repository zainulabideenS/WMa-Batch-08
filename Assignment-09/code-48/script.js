// Write a js program to convert Hexadecimal to Binary number system.
function hexadecimalToDecimal(hexadecimal) {
    let decimal = 0;
    const hexString = hexadecimal.toString().toUpperCase(); // Convert to uppercase for consistency

    // Convert hexadecimal to decimal
    for (let i = 0; i < hexString.length; i++) {
        const digit = hexString[i];
        const value = parseInt(digit, 16); // Convert hex digit to decimal
        decimal += value * Math.pow(16, hexString.length - 1 - i); // Calculate decimal value
    }

    return decimal;
}

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

function hexadecimalToBinary(hexadecimal) {
    const decimal = hexadecimalToDecimal(hexadecimal); // Convert hexadecimal to decimal
    const binary = decimalToBinary(decimal); // Convert decimal to binary
    return binary;
}

// Example usage:
const hexNumber = prompt("Enter a hexadecimal number:");
try {
    const result = hexadecimalToBinary(hexNumber);
    console.log(`Binary representation of hexadecimal ${hexNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid hexadecimal number.");
}