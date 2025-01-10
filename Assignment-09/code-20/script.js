// Write a js program to print all ASCII character with their values.
function printAsciiTable() {
    console.log("ASCII Character Table:");
    console.log("-----------------------");
    console.log("Value\tCharacter");
    console.log("-----------------------");

    for (let i = 0; i <= 127; i++) {
        // Convert the ASCII value to its corresponding character
        const char = String.fromCharCode(i);
        console.log(`${i}\t${char}`);
    }
}

printAsciiTable();