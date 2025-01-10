// Write a js program to convert Octal to Binary number system.
function octalToDecimal(octal) {
    let decimal = 0;
    const octalString = octal.toString();

    // Convert octal to decimal
    for (let i = 0; i < octalString.length; i++) {
        decimal += parseInt(octalString[i]) * Math.pow(8, octalString.length - 1 - i);
    }

    return decimal;
}

function decimalToBinary(decimal) {
    let binary = '';

    // Convert decimal to binary
    while (decimal > 0) {
        binary = (decimal % 2) + binary; // Get the remainder and prepend it to the binary string
        decimal = Math.floor(decimal / 2); // Divide the decimal number by 2
    }

    return binary || '0'; // Return '0' if the binary string is empty
}

function octalToBinary(octal) {
    const decimal = octalToDecimal(octal); // Convert octal to decimal
    const binary = decimalToBinary(decimal); // Convert decimal to binary
    return binary;
}

// Example usage:
const octalNumber = prompt("Enter an octal number:");
try {
    const result = octalToBinary(octalNumber);
    console.log(`Binary representation of octal ${octalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid octal number.");
}