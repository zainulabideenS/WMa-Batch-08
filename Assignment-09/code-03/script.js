// Write a js program to print all alphabets from a to z. - using while loop
let char = 'a';
while (char <= 'z') {
    console.log(char);
    char = String.fromCharCode(char.charCodeAt(0) + 1);
}