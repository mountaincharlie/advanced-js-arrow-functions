/**
* To run this file in Gitpod, use the
* command node rest-parameter.js in the terminal
*/


// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);

console.log("sum:", sum);  // when you know how many paraeters you want


// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);

console.log("sum2:", sum2);  // the extra parameters are just ignored


// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3);
let sum4 = sumRest(1, 2, 3, 4, 5, 6); 

console.log("sum3:", sum3);
console.log("sum4:", sum4);  // the additional params have been included correctly


