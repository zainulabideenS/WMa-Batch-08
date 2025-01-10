// Write a js program to convert Decimal to Hexadecimal number system.
function decimalToHexadecimal(decimal) {
    let hexadecimal = '';

    // Convert decimal to hexadecimal
    if (decimal === 0) {
        return '0'; // Handle the case for 0
    }

    while (decimal > 0) {
        const remainder = decimal % 16; // Get the remainder
        // Convert remainder to hexadecimal character
        if (remainder < 10) {
            hexadecimal = remainder.toString() + hexadecimal; // For 0-9
        } else {
            hexadecimal = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + hexadecimal; // For A-F
        }
        decimal = Math.floor(decimal / 16); // Divide the decimal number by 16
    }

    return hexadecimal; // Return the hexadecimal representation
}

// Example usage:
const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToHexadecimal(Number(decimalNumber));
    console.log(`Hexadecimal representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}