/**
* Operates on an arrays of elements
* Acomplishes similar things to for/while loops
* Iterator method
*
* Takes 1 param = a callback function 
* Executes the function on each element
* Returns a new array of the results
*/


// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums){
    results.push(num * 2);
}
console.log(results);


// Using map() - long winded example
const multByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);


// Simplified w/ map() + arrow functions
const withArrow = nums.map(num => num * 2);
console.log(withArrow);


// With ojbects
const students = [
    {
        id: 1,
        name: "Mark",
        profession: "Dev",
        skill: "JS"

    },
    {
        id: 2,
        name: "Ariel",
        profession: "Dev",
        skill: "HTML"

    },
    {
        id: 3,
        name: "Jason",
        profession: "Des",
        skill: "CSS"

    }
];



const studentData = students.map(student => [student.id, student.name]);
console.log(studentData);