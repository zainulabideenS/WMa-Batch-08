// 13. Write a js program to reverse order of words in a given string
function check()
{
    var input = document.getElementById('input').value;
    var result = document.getElementById('result');
    var reverse = input.split(' ').reverse().join(' ');
    result.innerHTML = reverse;
}