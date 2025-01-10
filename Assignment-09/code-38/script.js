// Write a js program to find two's complement of a binary number.
function onesComplement(binary) {
    let complement = '';

    // Iterate through each bit in the binary number
    for (let i = 0; i < binary.length; i++) {
        // Flip the bit
        if (binary[i] === '0') {
            complement += '1';
        } else if (binary[i] === '1') {
            complement += '0';
        } else {
            throw new Error("Invalid binary number"); // Handle invalid input
        }
    }

    return complement;
}

function addBinary(bin1, bin2) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(bin1.length, bin2.length);

    // Pad the shorter binary number with leading zeros
    bin1 = bin1.padStart(maxLength, '0');
    bin2 = bin2.padStart(maxLength, '0');

    // Add the two binary numbers
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(bin1[i]) + parseInt(bin2[i]) + carry;
        result = (sum % 2) + result; // Get the current bit
        carry = Math.floor(sum / 2); // Calculate the carry
    }

    // If there's a carry left, add it to the result
    if (carry) {
        result = carry + result;
    }

    return result;
}

function twosComplement(binary) {
    // Step 1: Find the one's complement
    const onesComp = onesComplement(binary);
    
    // Step 2: Add 1 to the one's complement
    const twosComp = addBinary(onesComp, '1');

    return twosComp;
}

// Example usage:
const binaryNumber = prompt("Enter a binary number:");
try {
    const result = twosComplement(binaryNumber);
    console.log(`Two's complement of ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error(error.message);
}