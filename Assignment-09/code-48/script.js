// Write a js program to convert Hexadecimal to Binary number system.
function hexadecimalToDecimal(hexadecimal) {
    let decimal = 0;
    const hexString = hexadecimal.toString().toUpperCase(); // Convert to uppercase for consistency

    for (let i = 0; i < hexString.length; i++) {
        const digit = hexString[i];
        const value = parseInt(digit, 16); 
        decimal += value * Math.pow(16, hexString.length - 1 - i); 
    }

    return decimal;
}

function decimalToBinary(decimal) {
    let binary = '';

    if (decimal === 0) {
        return '0'; 
    }

    while (decimal > 0) {
        const remainder = decimal % 2; 
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2); 
    }

    return binary; 
}

function hexadecimalToBinary(hexadecimal) {
    const decimal = hexadecimalToDecimal(hexadecimal); 
    const binary = decimalToBinary(decimal); 
    return binary;
}

const hexNumber = prompt("Enter a hexadecimal number:");
try {
    const result = hexadecimalToBinary(hexNumber);
    console.log(`Binary representation of hexadecimal ${hexNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid hexadecimal number.");
}