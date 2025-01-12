// Write a js program to convert Hexadecimal to Decimal number system.
function hexadecimalToDecimal(hexadecimal) {
    let decimal = 0;
    const hexString = hexadecimal.toString().toUpperCase(); // Convert to uppercase 

    for (let i = 0; i < hexString.length; i++) {
        const digit = hexString[i];
        const value = parseInt(digit, 16);
        decimal += value * Math.pow(16, hexString.length - 1 - i); 
    }

    return decimal;
}

const hexNumber = prompt("Enter a hexadecimal number:");
try {
    const result = hexadecimalToDecimal(hexNumber);
    console.log(`Decimal representation of hexadecimal ${hexNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid hexadecimal number.");
}