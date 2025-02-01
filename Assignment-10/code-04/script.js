// 4.Write a js program to compare two strings.
function compare(){
    const str1 = document.getElementById('input1').value;
    const str2 = document.getElementById('input2').value;
    const result = document.getElementById('result');
    if(str1===str2){
        result.innerHTML = 'The strings are equal';
}
else{
    result.innerHTML = 'The strings are not equal';
}
}