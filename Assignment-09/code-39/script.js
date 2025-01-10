// Write a js program to convert Binary to Octal number system.
function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryString = binary.toString();

    // Convert binary to decimal
    for (let i = 0; i < binaryString.length; i++) {
        decimal += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
    }

    return decimal;
}

function decimalToOctal(decimal) {
    let octal = '';

    // Convert decimal to octal
    while (decimal > 0) {
        octal = (decimal % 8) + octal; // Get the remainder and prepend it to the octal string
        decimal = Math.floor(decimal / 8); // Divide the decimal number by 8
    }

    return octal || '0'; // Return '0' if the octal string is empty
}

function binaryToOctal(binary) {
    const decimal = binaryToDecimal(binary); // Convert binary to decimal
    const octal = decimalToOctal(decimal); // Convert decimal to octal
    return octal;
}

// Example usage:
const binaryNumber = prompt("Enter a binary number:");
try {
    const result = binaryToOctal(binaryNumber);
    console.log(`Octal representation of binary ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid binary number.");
}