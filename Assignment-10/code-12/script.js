// 12.Write a js program to check whether a string is palindrome or not.
function check()
{
    var input = document.getElementById('input').value;
    var str = input.toLowerCase();
    var left = 0;
    var right = str.length - 1;
    while (left < right)
    {
        if (str[left] != str[right])
        {
            document.getElementById('result').innerHTML = "No";
            return;
        }
        left++;
        right--;
    }
    document.getElementById('result').innerHTML = "Yes";
}