// Write a js program to find frequency of each digit in a given integer.
function digitFrequency(num) {
    const numStr = num.toString();
        const frequency = {};

    for (let char of numStr) {
        if (/\d/.test(char)) {
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
        }
    }

    return frequency;
}

const number = 123321456;
const result = digitFrequency(number);
console.log(result);