// Write a js program to convert Binary to Hexadecimal number system.
function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryString = binary.toString();

    for (let i = 0; i < binaryString.length; i++) {
        decimal += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
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
            hexadecimal = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + hexadecimal; 
        }
        decimal = Math.floor(decimal / 16);
    }

    return hexadecimal || '0'; 
}

function binaryToHexadecimal(binary) {
    const decimal = binaryToDecimal(binary);
    const hexadecimal = decimalToHexadecimal(decimal);
    return hexadecimal;
}

const binaryNumber = prompt("Enter a binary number:");
try {
    const result = binaryToHexadecimal(binaryNumber);
    console.log(`Hexadecimal representation of binary ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid binary number.");
}