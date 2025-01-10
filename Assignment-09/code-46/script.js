// Write a js program to convert Decimal to Octal number system.
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

// Example usage:
const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToOctal(Number(decimalNumber));
    console.log(`Octal representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}