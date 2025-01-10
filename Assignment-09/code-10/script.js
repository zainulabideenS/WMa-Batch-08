// Write a js program to count number of digits in a number.
function countDigits(n)
{
    return n.toString().length;
}
const number = 12345;
const result = countDigits(number);
console.log('Total digits in this number = '+ result);
