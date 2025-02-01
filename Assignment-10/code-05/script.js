// 5. Write a js program to convert lowercase string to uppercase.
function uppercase(){
    const input = document.getElementById('input').value;
    const result =  document.getElementById('result');
    result.innerHTML = input.toUpperCase();
}