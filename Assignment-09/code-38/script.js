// Write a js program to find two's complement of a binary number.
function onesComplement(binary) {
    let complement = '';

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            complement += '1';
        } else if (binary[i] === '1') {
            complement += '0';
        } else {
            throw new Error("Invalid binary number"); 
        }
    }

    return complement;
}

function addBinary(bin1, bin2) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(bin1.length, bin2.length);

    bin1 = bin1.padStart(maxLength, '0');
    bin2 = bin2.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(bin1[i]) + parseInt(bin2[i]) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2); 
    }

    if (carry) {
        result = carry + result;
    }

    return result;
}

function twosComplement(binary) {
    const onesComp = onesComplement(binary);
    const twosComp = addBinary(onesComp, '1');

    return twosComp;
}
const binaryNumber = prompt("Enter a binary number:");
try {
    const result = twosComplement(binaryNumber);
    console.log(`Two's complement of ${binaryNumber} is: ${result}`);
} catch (error) {
    console.error(error.message);
}