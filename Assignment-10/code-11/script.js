// 11. Write a js program to find reverse of a string.
function check()
{
    var str = document.getElementById('input').value;
    var result = document.getElementById('result');
    var reverse =  str.split('').reverse().join('');
    result.innerHTML = reverse;
}