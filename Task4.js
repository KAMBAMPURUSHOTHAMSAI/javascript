// LEVEL 1 (Basic Practice)

// section 1: Array Basics
let arr1 = [10, 20, 30, 40, 50];

console.log("First Element:", arr1[0]);
console.log("Last Element:", arr1[arr1.length - 1]);
console.log("Array Length:", arr1.length);
//First Element: 10
//Last Element: 50
//Array Length: 5

// section 2: Push & Pop
let arr2 = [1, 2, 3];
arr2.push(4, 5);
arr2.pop();
console.log(arr2);
//[1, 2, 3, 4]


// section 3: Includes Check
let arr3 = ["html", "css", "javascript", "react"];
console.log(arr3.includes("javascript"));
//true


// section 4: Filter Salaries
let emp1 = [
  {name: "A", salary: 10000},
  {name: "B", salary: 50000},
  {name: "C", salary: 30000}
];
let result = emp1.filter(e => e.salary > 20000);
console.log(result);
//[ { name: 'B', salary: 50000 }, { name: 'C', salary: 30000 } ]


// section 5: Map Names
let names = emp1.map(e => e.name);
console.log(names);
//[ 'A', 'B', 'C' ]


// section 6: Reduce Sum
let total = emp1.reduce((sum, e) => sum + e.salary, 0);
console.log(total);
//90000


// LEVEL 3 (Logic Building)

// section 7: Remove Duplicates
let arr4 = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr4)];
console.log(unique);
//[1, 2, 3, 4, 5]


// section 8: Find Largest Number
let arr5 = [10, 200, 5, 90];
let max = Math.max(...arr5);
console.log(max);
//200


// section 9: Reverse String WITHOUT reverse()
let str1 = "hello";
let reversed = "";
for (let i = str1.length - 1; i >= 0; i--) {
  reversed += str1[i];
}
console.log(reversed);
//olleh



// LEVEL 4 (Advanced Thinking)
// section 10: Group by Salary
let emp2 = [
  {name: "A", salary: 10000},
  {name: "B", salary: 50000},
  {name: "C", salary: 10000}
];
let grouped = {};
emp2.forEach(e => {
  if (!grouped[e.salary]) {
    grouped[e.salary] = [];
  }
  grouped[e.salary].push(e.name);
});
console.log(grouped);
//{ '10000': [ 'A', 'C' ], '50000': [ 'B' ] }


// section 11: Flatten Array
let arr6 = [1, [2, [3, [4]]]];
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten(arr6));
//[1, 2, 3, 4]



// section 12: Custom Sort
let arr7 = [5, 2, 9, 1];
arr7.sort((a, b) => b - a);
console.log(arr7);
//[9, 5, 2, 1]



// BONUS
// section 13: Second Largest
let arr8 = [10, 50, 20, 40];
let sorted = [...new Set(arr8)].sort((a, b) => b - a);
console.log(sorted[1]);
//40


// section 14: Count Characters
let str2 = "aabbccdde";
let count = {};
for (let char of str2) {
  count[char] = (count[char] || 0) + 1;
}
console.log(count);
//{ a: 2, b: 2, c: 2, d: 2, e: 1 }