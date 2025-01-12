// Write a js program to check whether a number is palindrome or not.

function isPalindrome(num) {
    const numStr = num.toString(); 
    const reversedStr = numStr.split('').reverse().join(''); 
    return numStr === reversedStr;
}

// button click
function checkPalindrome() {
    const userInput = document.getElementById('input').value;
    if (userInput.trim() !== '') {
        const number = parseInt(userInput);
        const resultText = isPalindrome(number) ? `${number} is a palindrome.` : `${number} is not a palindrome.`; // Check if it's a palindrome
        document.getElementById('output').innerText = resultText;
    } else {
        document.getElementById('output').innerText = "Please enter a valid number.";
    }
}