// Write a js program to convert Octal to Hexadecimal number system
function octalToDecimal(octal) {
    let decimal = 0;
    const octalString = octal.toString();

    // Convert octal to decimal
    for (let i = 0; i < octalString.length; i++) {
        decimal += parseInt(octalString[i]) * Math.pow(8, octalString.length - 1 - i);
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

function octalToHexadecimal(octal) {
    const decimal = octalToDecimal(octal); // Convert octal to decimal
    const hexadecimal = decimalToHexadecimal(decimal); // Convert decimal to hexadecimal
    return hexadecimal;
}

// Example usage:
const octalNumber = prompt("Enter an octal number:");
try {
    const result = octalToHexadecimal(octalNumber);
    console.log(`Hexadecimal representation of octal ${octalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid octal number.");
}