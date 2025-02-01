//3. Write a js program to concatenate two strings.
function concate(){
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const result = document.getElementById('result');
    result.innerHTML = `${input1} ${input2}`;   
}