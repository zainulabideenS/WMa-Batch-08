// Write a js program to calculate sum of digits of a number.
function sumOfDigits(n) {
   let sum = 0;
   const numberStr = n.toString();
   for(let i = 0; i < numberStr.length; i++){
        sum += parseInt(numberStr[i]);
   }
   return sum;
}
const number = 1234;
const result = sumOfDigits(number);
console.log(`The sum of ${number} is ${result}`); 