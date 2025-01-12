// Write a js program to convert Decimal to Octal number system.
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

const decimalNumber = prompt("Enter a decimal number:");
try {
    const result = decimalToOctal(Number(decimalNumber));
    console.log(`Octal representation of decimal ${decimalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid decimal number.");
}