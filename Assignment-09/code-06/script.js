// Write a js program to find sum of all natural numbers between 1 to n.// 
function sumOfNaturalNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const sum =sumOfNaturalNumber(10);
console.log(`The sum of natural numbers from 1 to 5 is: ${sum}`);
