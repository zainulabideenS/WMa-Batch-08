// Write a js program to enter a number and print its reverse.
function reverseNumber(num) {
    let reversed = ''; // 
    for (let i = num.length - 1; i >= 0; i--) {
        reversed += num[i]; 
    }
    return reversed;
}

document.getElementById('reverseButton').addEventListener('click', function() {
    const userInput =document.getElementById('input').value; 
    const reversedNumber = reverseNumber(userInput);
    document.getElementById('output').innerText = `${userInput} is ${reversedNumber}`;
});