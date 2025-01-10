// Write a js program to enter a number and print it in words
function numberToWords(num) {
    const belowTwenty = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    if (num < 20) return belowTwenty[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + belowTwenty[num % 10] : '');
    if (num < 1000) return belowTwenty[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' ' + numberToWords(num % 100) : '');
    if (num < 10000) return belowTwenty[Math.floor(num / 1000)] + ' Thousand' + (num % 1000 !== 0 ? ' ' + numberToWords(num % 1000) : '');

    return '';
}

function convert(){
    const userInput = document.getElementById('input').value;
const number = parseInt(userInput);

if (!isNaN(number) && number >= 0 && number <= 9999) {
    const words = numberToWords(number);
    const result = document.getElementById('output');
    result.textContent = `The number ${number} in words is: ${words}`;
} else {
    result.textContent = 'Please enter a number between 0 and 9999';
}
}
