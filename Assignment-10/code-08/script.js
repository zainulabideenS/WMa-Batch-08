// 8. Write a js program to find total number of alphabets, digits or special character in a string.
function check()
{
    const input = document.getElementById('input').value;   
    const result = document.getElementById('result');
    let alphabetCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;
    for (char of input)
    {
        if (char.match(/[a-z]/i))
        {
            alphabetCount++;
        }
        else if (char.match(/[0-9]/))
        {
            digitCount++;
        }
        else
        {
            specialCharCount++;
        }
    }
    result.innerHTML = `Alphabets: ${alphabetCount}, Digits: ${digitCount}, Special Characters: ${specialCharCount}`;
}