// Write a js program to convert Decimal to Binary number system.
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

const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToBinary(Number(decimalNumber));
    console.log(`Binary representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}