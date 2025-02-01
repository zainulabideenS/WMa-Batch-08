// 14. Write a js program to find first occurrence of a character in a given string.
function checkOccurance(str, char) {
    
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;

}
var inputString = document.getElementById("input");
var inputChar = document.getElementById("input2");
var result = document.getElementById("result"); 
function check() {
  result.innerHTML = checkOccurance(inputString.value, inputChar.value);
}

