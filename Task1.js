//section 1:Variable Update
var a=50;
a=100;
console.log(a);
//100


//section 2: Variable Math
let mark=80;
mark=mark+10;
console.log(mark);
//90


//section 3: const Value
const price=500;
const finalPrice=price+100;
console.log(finalPrice);
//600


//section 4: Print Statements
console.log("Welcome Team");
console.log("2026");
console.log("true");
//Welcome Team
//2026
//true


//section 5: Datatype Check
console.log(typeof("JavaScript"));
console.log(typeof(250));
console.log(typeof(false));
//string
//number
//boolean


//section 6: Array task
let Fruits=["Apple","Banana","Mango","Orange","Grapes"];
console.log(Fruits);
console.log(Fruits[0]);
console.log(Fruits[Fruits.length-1]);
//[ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]
//Apple
//Grapes


//section 7: Object task
let student={
    name:"Naveen",
    age:20,
    course:"MERN"
}
console.log(student.name);
console.log(student.age);
//Naveen
//20


//section 8: Arthmetic Operations
console.log(20+10);
console.log(50-25);
console.log(5*5);
console.log(100/4);
console.log(20%3);
//30
//25
//25
//25
//2


//section 9: increment and decrement
let x=5;
x++
console.log(x);

let y=10;
y--
console.log(y);
//6
//9


//section 10: Comparison Operators
console.log(10>5);
console.log(5<2);
console.log(20=="20");
console.log(15==="15");
console.log(10!=8);
//true
//false
//true
//false
//true


//section 11: Logical Operators
console.log(5>2 && 10>3);
console.log(7<5 || 8>2);
console.log(!(10>5));
//true
//true
//false


//section 12: Ternary Operator
let age=18;
age>=18?console.log("Eligible"):console.log("Not Eligible");
//Eligible

