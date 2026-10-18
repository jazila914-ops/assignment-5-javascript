
console.log("TASK 11: Dog Age Calculation");

function calculateHumanAge(dogAge) {
    const humanAge = (dogAge - 2) * 4 + 21;

    console.log(
        `Dog age: ${dogAge}, calculated human age: ${humanAge}`
    );
}

calculateHumanAge(2);
calculateHumanAge(5);
