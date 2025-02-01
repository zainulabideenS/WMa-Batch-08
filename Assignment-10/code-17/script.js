// 17. Write a js program to count occurrences of a character in given string.
function countOccurrences(str, char) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++; 
        }
    }
    return count; 
}
function check()
{
    const strValue = document.getElementById("input").value;    
    const charValue = document.getElementById("input2").value;
    var result = document.getElementById("result");
    if(charValue.length !== 1)
    {
        result.innerText = 'please Enter a single character';
        return;
    }
    const count = countOccurrences(strValue,charValue);
    result.innerText = `Ther character '${charValue}' occurs ${count} times in the string`;
}