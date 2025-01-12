// Write a js program to convert Octal to Binary number system.
function octalToDecimal(octal) {
    let decimal = 0;
    const octalString = octal.toString();

    for (let i = 0; i < octalString.length; i++) {
        decimal += parseInt(octalString[i]) * Math.pow(8, octalString.length - 1 - i);
    }

    return decimal;
}

function decimalToBinary(decimal) {
    let binary = '';

    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2); 
    }

    return binary || '0'; 
}

function octalToBinary(octal) {
    const decimal = octalToDecimal(octal); 
    const binary = decimalToBinary(decimal); 
    return binary;
}

const octalNumber = prompt("Enter an octal number:");
try {
    const result = octalToBinary(octalNumber);
    console.log(`Binary representation of octal ${octalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid octal number.");
}