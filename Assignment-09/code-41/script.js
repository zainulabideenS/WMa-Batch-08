// Write a js program to convert Binary to Hexadecimal number system.
function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryString = binary.toString();

    // Convert binary to decimal
    for (let i = 0; i < binaryString.length; i++) {
        decimal += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
    }

    return decimal;
}

function decimalToHexadecimal(decimal) {
    let hexadecimal = '';

    // Convert decimal to hexadecimal
    while (decimal > 0) {
        const remainder = decimal % 16;
        // Convert remainder to hexadecimal character
        if (remainder < 10) {
            hexadecimal = remainder.toString() + hexadecimal; // For 0-9
        } else {
            hexadecimal = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + hexadecimal; // For A-F
        }
        decimal = Math.floor(decimal / 16); // Divide the decimal number by 16
    }

    return hexadecimal || '0'; // Return '0' if the hexadecimal string is empty
}

function binaryToHexadecimal(binary) {
    const decimal = binaryToDecimal(binary); // Convert binary to decimal
    const hexadecimal = decimalToHexadecimal(decimal); // Convert decimal to hexadecimal
    return hexadecimal;
}

// Example usage:
const binaryNumber = prompt("Enter a binary number:");
try {
    const result = binaryToHexadecimal(binaryNumber);
    console.log(`Hexadecimal representation of binary ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid binary number.");
}