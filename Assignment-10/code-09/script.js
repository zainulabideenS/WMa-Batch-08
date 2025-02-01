// 9. Write a js program to count total number of vowels and consonants in a string.
function check()
{
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');
    let vowels = "";
    let consonants = "";
    for (char of input)
    {
        if(char.match(/[a-z]/i))
        {
            if(char.match(/[aeiou]/i))
            {
                vowels++;
            }
            else
            {
                consonants++;
            }
        }
    }
    result.innerHTML = `Vowels: ${vowels}, Consonants: ${consonants}`;
}