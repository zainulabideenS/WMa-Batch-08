// 2. Write a js program to copy one string to another string.
function copy() {
    const str = document.getElementById('input');
    str.select();
    const final =navigator.clipboard.writeText(str.value);
    const result =  document.getElementById('result');
    result.innerHTML = final;
}