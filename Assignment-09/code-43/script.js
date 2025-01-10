// Write a js program to convert Octal to Decimal number system
function octalToDecimal(octal) {
    let decimal = 0;
    const octalString = octal.toString();

    // Convert octal to decimal
    for (let i = 0; i < octalString.length; i++) {
        decimal += parseInt(octalString[i]) * Math.pow(8, octalString.length - 1 - i);
    }

    return decimal;
}

// Example usage:
const octalNumber = prompt("Enter an octal number:");
try {
    const result = octalToDecimal(octalNumber);
    console.log(`Decimal representation of octal ${octalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid octal number.");
}