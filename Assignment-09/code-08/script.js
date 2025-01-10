// Write a js program to find sum of all odd numbers between 1 to n.
function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i =0; i<=n; i++)
    {
        if(i%2 !== 0)
        {
            sum += i;
        }
    }
    return sum;
}
const odd = sumOfOddNumbers(5);
console.log(odd);
