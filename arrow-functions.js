/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */


// Vanilla JavaScript Function
// function addTwoNumbers(a, b){
//     // code block
//     return a + b;
// }
// let sum = addTwoNumbers(3,5);
// console.log(sum);


// Arrow Function With Parameters [for more complex functions]
const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);


// Single Line Arrow Function With Parameters [for simple functions]
const addTwoNumbers2 = (a, b) => console.log(a + b);
addTwoNumbers2(6, 4);
// const addTwoNumbers2 = (a, b) => a + b; // without returning straight to the console
// let sum2 = addTwoNumbers2(6, 4);
// console.log(sum2);


// Implicit Returns [most simple]
const saySomething = message => console.log(message);  // 1 param
saySomething('Hello there')

const sayHello = () => console.log('Hello');  // no params 
sayHello();


// Returning Multiple Lines (return wrapped in brackets)
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())
