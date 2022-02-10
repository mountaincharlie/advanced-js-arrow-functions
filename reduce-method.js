/**
* Operates on an accays of elements
* Acomplishes similar things to for/while loops
* Iterator method
*
* Takes 1 param = a callback function
* (and optional 2nd param for a specific value for acc)
* Reduces all the elements to a single value
* Returns the singular value 
*
* reduce((accumulator, currentValue) => accumulator + currentValue, startValue)
*/

// Summing an accay of numbers:
const nums = [0, 1, 2, 3, 4];
// acc -> 'accumulator' (eventually returned), curr -> currentValue
let sum = nums.reduce((acc, curr) => acc + curr);
console.log("starting with the first element by default:", sum);

// taking a look inside
console.log("Taking a look inside:")
let sum2 = nums.reduce((acc, curr) => {
    console.log(
        "accumulator:", acc,
        "currentValue:", curr,
        "total:", acc + curr,
    );
    return acc + curr;
}, 10); // choosing a starting value
// IF SET TO 10, the value will be added to 10
console.log("starting at 10:", sum2);


// object for below examples
const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 10
      }
];
   
   
// Totaling a specific object property (team exp)
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp);
   
   
// Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    // check if it already exists in our object
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {  // or adding to the existing
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});  // initial value is an empty object

console.log(expByProfession);
   
   