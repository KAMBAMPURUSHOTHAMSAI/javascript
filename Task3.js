//Level-1 :Function basics
//Section1: Student Form Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}
studentForm("Naveen", 22, "MERN");
//Name: Naveen
//Age: 22
//Course: MERN


//Section 2: Calculation Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}
calc(10, 5);
//Addition: 15
//Subtraction: 5
//Multiplication: 50


//Section 3: Reusable Greeting
function greet(name) {
    console.log("Hello " + name);
}
greet("Kamal");
greet("Praveen");
greet("Sai");
//Hello Kamal
//Hello Praveen
//Hello Sai


//Level-2 :Return & Scope
//section 4: Return Value
function square(num) {
    return num * num;
}
console.log(square(5));
//25


//section 5: Scope check
function testScope() {
    let secret = "javascript";
    console.log("Inside:", secret);
}
testScope();
//console.log(secret);  Error
// let is block-scoped → cannot access outside function.


//Level 3: Spread/Rest 
//section 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let combined = [...boys, ...girls];
console.log(combined);
//["car", "bike", "doll", "teddy"]



//section 7: unlimited numbers
function sumAll(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
console.log(sumAll(10, 20, 30, 40));
//100



//Level-4 :Destructuring 
//section 8: Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);
//red green blue



//section 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
let { name, role } = emp;
console.log(name, role);
//Naveen Developer



//Level-5 :Real time logic
//section 10:offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}
let gen = offerGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//10% cashback
//20% cashback
//50% cashback
//Try again
//No more offers    



//Level-6 :Advanced 
//section 11:curry function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(add(10)(20)(30));
//60



//section 12: Student Marks Analyzer
function marks(...nums) {
    let total = nums.reduce((sum, n) => sum + n, 0);
    let avg = total / nums.length;
    console.log("Total =", total);
    console.log("Average =", avg);
}
marks(80, 90, 70, 60);
//Total = 300
//Average = 75



// Challenge Task (Real Company level)
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
//Name: Naveen
//Role: Frontend
//Skills: HTML CSS JS React