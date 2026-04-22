//section 1:Create Student Data
let students = [
    {id:1,name:"Naveen",mark:85,course:"MERN"},
    {id:2,name:"john",mark:45,course:"Python"},
    {id:3,name:"Priya",mark:72,course:"Java"},
    {id:4,name:"Arun",mark:95,course:"React"}
]
for (let i=0;i<2;i++){
    console.log(`${students[i].id} ${students[i].name} ${students[i].mark} ${students[i].course}`);
}
//1 Naveen 85 MERN
//2 john 45 Python

//section 2:Check Pass/Fail

for (let i=0;i<2;i++){
    if (students[i].mark >= 50){
        console.log(`${students[i].name} - Pass`);
    } else {
        console.log(`${students[i].name} - Fail`);
    }
}

//Naveen - Pass
//john - Fail

//section 3: Grade System
for (let i=0;i<students.length;i++){
    if (students[i].mark >= 90){
        console.log(`${students[i].name} - Grade A`);
    } else if (students[i].mark >=75){
        console.log(`${students[i].name} - Grade B`);
    } else if (students[i].mark >=50){
        console.log(`${students[i].name} - Grade C`);
    } else {
        console.log(`${students[i].name} - Fail`);
    }
}
//Naveen - Grade B
//john - Fail
//Priya - Grade C
//Arun - Grade A



//section 4: Topper Student
let topper = students[0];
for (let i=1;i<students.length;i++){
    if (students[i].mark > topper.mark){
        topper = students[i];
    }
}
console.log(`Topper is ${topper.name} - ${topper.mark}`);

//Topper is Arun - 95


//Section 5: Course Search
for (let student of students){
    if (student.course === "React"){
        console.log(student);
    }
}

//  { id: 4, name: "Arun", mark: 95, course: "React" } 


//Section 6: Add New Student
let newStudent = {id:5,name:"Rahul",mark:88,course:"Node JS"};
students.push(newStudent);
console.log(students);

// [ { id: 1, name: "Naveen", mark: 85, course: "MERN" },
//   { id: 2, name: "john", mark: 45, course: "Python" },
//   { id: 3, name: "Priya", mark: 72, course: "Java" },
//   { id: 4, name: "Arun", mark: 95, course: "React" },
//   { id: 5, name: "Rahul", mark: 88, course: "Node JS" } ]


//Section 7: Attendence System
let status = "Present";
switch (status) {
    case "Present":
        console.log("Welcome");
        break;
    case "Absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
}

//Welcome


//Section 8: Login System
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}

//Login Success