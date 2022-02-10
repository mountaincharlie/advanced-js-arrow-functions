/**
* To run this file in Gitpod, use the
* command node destructuring.js in the terminal
* A way to avoid needing to write multiple lines of indexing or accessing object properites
*/


// Destructuring arrays
let ages = [30, 26, 27];

// (without Destructuring)
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

// (with Destructuring)
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "acountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;  // assigns first two, ignores rest
console.log(johnNative, johnSecondary);  // only "english" and "french" assigned

// to skip values, add commas
let [, , maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);

// only destructing what u need from an object
let languages2 = {
    firstlanguage: "english",
    secondlanguage: "french",
    thirdlanguage: "german",
    fourthlanguage: "japanese"
};
let {firstlanguage, secondlanguage} = languages2;
console.log(firstlanguage, secondlanguage);


// Using rest parameter syntax
// on arrays
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);  // array of the remaining elements

// on objects
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "steak",
    andrea: "sushi"
};
let {brian, anna, ...remaining} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(remaining);




