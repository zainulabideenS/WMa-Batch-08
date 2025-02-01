// 10. Write a js program to count total number of words in a string.
function check()
{
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');
    const removeSpace = input.split(' ');
    const final = removeSpace.length;
    if(input === '')
    {
        result.innerHTML = 'Please enter a string';
    }
    else{
    result.innerHTML = `Words: ${final}`;
    }
}