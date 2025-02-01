// 7. Write a js program to toggle case of each character of a string.
function toggle() {
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');
    let toggleString = '';  
    for (let char of input) {
       if(char === char.toUpperCase())
       {
              toggleString += char.toLowerCase();
       }
       else{
        toggleString += char.toUpperCase();
       }
    }
    result.innerHTML = toggleString; 
}