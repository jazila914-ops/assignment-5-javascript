
console.log("TASK 7: Input and a Greeting");

const userName = prompt("What is your name?");

if (userName !== null && userName.trim() !== "") {
    alert(`Hello, ${userName}! Welcome to my project.`);
} else {
    alert("Hello! Welcome to my project.");
}

const studentName = "Zhazila Zhexenbikyzy";
const group = "MT-2501";

const studentGreeting =
    "My name is " + studentName + " and my group is " + group + ".";

console.log(studentGreeting);
