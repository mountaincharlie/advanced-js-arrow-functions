/**
* To run this file in Gitpod, use the
* command node spread-operator.js in the terminal
*/


// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log("arr2:", arr2);
console.log("arr1:", arr1);  // arr2 actually points to the same obj as arr1, so arr1 is changed when arr2 is


// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];  // using the spread op to create a new array from another

arr4.push(7);
console.log("arr3:", arr3);  // this array has remained untouched 
console.log("arr4:", arr4); 


// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};  // copying obj1 and adding a new value
let obj3 = {...obj1, b: 'two'};  // copying obj1 and overriding an existing value

console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj3:", obj3);


// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];

console.log("arr5:", arr5);