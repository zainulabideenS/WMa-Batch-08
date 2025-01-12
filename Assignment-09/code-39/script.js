// Write a js program to convert Binary to Octal number system.
function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryString = binary.toString();

    for (let i = 0; i < binaryString.length; i++) {
        decimal += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
    }

    return decimal;
}

function decimalToOctal(decimal) {
    let octal = '';

    while (decimal > 0) {
        octal = (decimal % 8) + octal; 
        decimal = Math.floor(decimal / 8); 
    }

    return octal || '0'; 
}

function binaryToOctal(binary) {
    const decimal = binaryToDecimal(binary); 
    const octal = decimalToOctal(decimal); 
    return octal;
}

const binaryNumber = prompt("Enter a binary number:");
try {
    const result = binaryToOctal(binaryNumber);
    console.log(`Octal representation of binary ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid binary number.");
}