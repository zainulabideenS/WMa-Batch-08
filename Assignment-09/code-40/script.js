// Write a js program to convert Binary to Decimal number system.
function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryString = binary.toString();

    for (let i = 0; i < binaryString.length; i++) {
        decimal += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
    }

    return decimal;
}

const binaryNumber = prompt("Enter a binary number:");
try {
    const result = binaryToDecimal(binaryNumber);
    console.log(`Decimal representation of binary ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error("Invalid binary number.");
}