// Write a js program to convert Decimal to Hexadecimal number system.
function decimalToHexadecimal(decimal) {
    let hexadecimal = '';

    if (decimal === 0) {
        return '0'; 
    }

    while (decimal > 0) {
        const remainder = decimal % 16;
        if (remainder < 10) {
            hexadecimal = remainder.toString() + hexadecimal;
        } else {
            hexadecimal = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + hexadecimal; 
        }
        decimal = Math.floor(decimal / 16); 
    }

    return hexadecimal; 
}

const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToHexadecimal(Number(decimalNumber));
    console.log(`Hexadecimal representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}