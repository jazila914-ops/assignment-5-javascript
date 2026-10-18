
console.log("TASK 12: Functions");

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

greetUser("Zhazila");
greetUser("Aruzhan");

function calculateSum(a, b) {
    return a + b;
}

console.log("Sum of 12 and 5:", calculateSum(12, 5));
console.log("Sum of 7 and 8:", calculateSum(7, 8));

function calculateRectangleArea(width, height) {
    return width * height;
}

console.log(
    "Rectangle area (4 x 6):",
    calculateRectangleArea(4, 6)
);

console.log(
    "Rectangle area (3 x 9):",
    calculateRectangleArea(3, 9)
);
