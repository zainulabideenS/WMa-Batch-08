// Write a js program to convert Octal to Hexadecimal number system
function octalToDecimal(octal) {
    let decimal = 0;
    const octalString = octal.toString();

    for (let i = 0; i < octalString.length; i++) {
        decimal += parseInt(octalString[i]) * Math.pow(8, octalString.length - 1 - i);
    }

    return decimal;
}

function decimalToHexadecimal(decimal) {
    let hexadecimal = '';

    while (decimal > 0) {
        const remainder = decimal % 16;
        if (remainder < 10) {
            hexadecimal = remainder.toString() + hexadecimal;
        } else {
            hexadecimal = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + hexadecimal; // For A-F
        }
        decimal = Math.floor(decimal / 16); 
    }

    return hexadecimal || '0'; 
}

function octalToHexadecimal(octal) {
    const decimal = octalToDecimal(octal); 
    const hexadecimal = decimalToHexadecimal(decimal); 
    return hexadecimal;
}

const octalNumber = prompt("Enter an octal number:");
try {
    const result = octalToHexadecimal(octalNumber);
    console.log(`Hexadecimal representation of octal ${octalNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid octal number.");
}