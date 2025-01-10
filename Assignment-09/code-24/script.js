// Write a js program to find HCF (GCD) of two numbers.
function HCF(num1, num2) {
  // Ensure both numbers are positive
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // Use the Euclidean algorithm to find HCF
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2; // Remainder
    num1 = temp; // Update num1
  }

  return num1; // The HCF is in num1
}
function findHCF() {
  const userInput1 = document.getElementById("input").value;
  const userInput2 = document.getElementById("input1").value;

  const number1 = parseInt(userInput1, 10);
  const number2 = parseInt(userInput2, 10);

  if (!isNaN(number1) && !isNaN(number2) && number1 > 0 && number2 > 0) {
    const hcf = HCF(number1, number2);
    const output = document.getElementById("output");
    output.textContent = `The HCF (GCD) of ${number1} and ${number2} is: ${hcf}`;
  } else {
  output.textContent = `Please enter valid numbers`;
  }
}
