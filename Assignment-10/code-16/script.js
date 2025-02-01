// 16. Write a js program to search all occurrences of a character in given string.
function findAllOccurrences(str, char) {
    const indices = []; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
        }
    }
    return indices; 
}

 function check() {
    const strValue = document.getElementById("input").value;
    const charValue = document.getElementById("input2").value;

    if (charValue.length !== 1) {
        document.getElementById("result").innerText = "Please enter a single character.";
        return;
    }

    const indices = findAllOccurrences(strValue, charValue);
    if (indices.length > 0) {
        document.getElementById("result").innerText = `The character '${charValue}' occurs at indices: ${indices.join(", ")}.`;
    } else {
        document.getElementById("result").innerText = `The character '${charValue}' is not found in the string.`;
    }
};