// Write a js program to convert Hexadecimal to Octal number system
function hexadecimalToDecimal(hexadecimal) {
    let decimal = 0;
    const hexString = hexadecimal.toString().toUpperCase(); 

    for (let i = 0; i < hexString.length; i++) {
        const digit = hexString[i];
        const value = parseInt(digit, 16); 
        decimal += value * Math.pow(16, hexString.length - 1 - i); 
    }

    return decimal;
}

function decimalToOctal(decimal) {
    let octal = '';

    if (decimal === 0) {
        return '0';
    }

    while (decimal > 0) {
        const remainder = decimal % 8; 
        octal = remainder + octal; 
        decimal = Math.floor(decimal / 8); 
    }

    return octal;
}

function hexadecimalToOctal(hexadecimal) {
    const decimal = hexadecimalToDecimal(hexadecimal);
    const octal = decimalToOctal(decimal); 
    return octal;
}

const hexNumber = prompt("Enter a hexadecimal number:");
try {
    const result = hexadecimalToOctal(hexNumber);
    console.log(`Octal representation of hexadecimal ${hexNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid hexadecimal number.");
}