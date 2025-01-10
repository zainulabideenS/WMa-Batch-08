// Write a js program to calculate product of digits of a number.
function productOfDigits(num) {
    let product = 1;
    const numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        product *= parseInt(numStr[i]); 
    }

    return product; 
}

const number = 12345;
const result = productOfDigits(number);
console.log(`Product of digits of ${number} is: ${result}`);