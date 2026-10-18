
console.log("TASK 8: Sum and Arithmetic");

const firstInput = prompt("Enter the first number:");
const secondInput = prompt("Enter the second number:");

const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

if (
    firstInput !== null &&
    secondInput !== null &&
    firstInput.trim() !== "" &&
    secondInput.trim() !== "" &&
    Number.isFinite(firstNumber) &&
    Number.isFinite(secondNumber) &&
    secondNumber !== 0
) {
    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);

    console.log("Sum:", firstNumber + secondNumber);
    console.log("Difference:", firstNumber - secondNumber);
    console.log("Product:", firstNumber * secondNumber);
    console.log("Quotient:", firstNumber / secondNumber);
    console.log("Remainder:", firstNumber % secondNumber);
} else {
    alert("Enter valid numbers. The second number must not be zero.");
}

console.log('"12" + "5" =', "12" + "5");
console.log('Number("12") + Number("5") =', Number("12") + Number("5"));
