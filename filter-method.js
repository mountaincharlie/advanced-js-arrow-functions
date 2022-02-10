/** 
* Operates on an arrays of elements
* Acomplishes similar things to for/while loops
* Iterator method
*
* Takes 1 param = a callback function
* Filters unwanted elements
* Returns an array of only the values which are 'true' 
*/


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 28,
    },
];

// creating an array of only 21+ year olds
const oldEnough = people.filter(p => p.age >= 21);
console.log(oldEnough);

// looking for a specific quality
const paul = people.filter(p => p.name === 'Paul');  // can add [0]
console.log(paul);
   

// Complex Filtering
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
];

// filter the students by those with 5 years of exp in a skill 
// first callback function
const has5YearsExp = skill => skill.yrsExperience >= 5;  
// second callback function
const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0; 
// hasStrongSkills only 'true' for those with skills with enough exp
candidates = students.filter(hasStrongSkills);
console.log(candidates);

// using map() to only get their names
const candidateNames = candidates.map(candidate => [candidate.name]);
console.log(candidateNames);
   