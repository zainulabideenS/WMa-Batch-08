// Write a js program to convert Hexadecimal to Octal number system
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

function decimalToOctal(decimal) {
    let octal = '';

    // Convert decimal to octal
    if (decimal === 0) {
        return '0'; // Handle the case for 0
    }

    while (decimal > 0) {
        const remainder = decimal % 8; // Get the remainder
        octal = remainder + octal; // Prepend the remainder to the octal string
        decimal = Math.floor(decimal / 8); // Divide the decimal number by 8
    }

    return octal; // Return the octal representation
}

function hexadecimalToOctal(hexadecimal) {
    const decimal = hexadecimalToDecimal(hexadecimal); // Convert hexadecimal to decimal
    const octal = decimalToOctal(decimal); // Convert decimal to octal
    return octal;
}

// Example usage:
const hexNumber = prompt("Enter a hexadecimal number:");
try {
    const result = hexadecimalToOctal(hexNumber);
    console.log(`Octal representation of hexadecimal ${hexNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid hexadecimal number.");
}