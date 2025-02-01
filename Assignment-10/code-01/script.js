// Write a js program to find length of a string.
function check(){
    const str = document.getElementById('textId').value;
    const final=str.split(' ').join('').length;
    const result = document.getElementById('result');
    
    result.textContent = `Length of the string is: ${final}`;

}