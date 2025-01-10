// Write a js program to find sum of all even numbers between 1 to n.
function sumofEvenNumbers(n) {
    let sum = 0;
    for(i=1;i<=n;i++)
    {
        if(i%2==0)
        {
            sum+=i;
        }
    }
    return sum;
}
const sum = sumofEvenNumbers(4);
console.log(sum); // 6