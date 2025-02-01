// 15. Write a js program to find last occurrence of a character in a given string.
function findLastOccurrence(str, char) {
  return str.lastIndexOf(char); // Use lastIndexOf to find the last occurrence
}

function check() {
  var strValue = document.getElementById("input").value;
  var charValue = document.getElementById("input2").value;

  if (charValue.length !== 1) {
    document.getElementById("result").innerText =
      "Please enter a single character.";
    return;
  }

  var index = findLastOccurrence(strValue, charValue);
  if (index !== -1) {
    document.getElementById(
      "result"
    ).innerText = `The occurrence of '${charValue}' is at index ${index}.`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `The character '${charValue}' is not found in the string.`;
  }
};
