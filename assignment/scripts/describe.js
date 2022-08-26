// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it's value to 'Dane'
// We then check if the variable is equal to 'Mary'
// If it is equal, then we console.log 'Hi, Mary!', if it isn't equal, then we console.log 'How do you do?'
// Because name does not equal 'Mary', we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret, and we make another variable called code that has a value of 123
// We check if code equals 123, if it does then the variable secret equals 'super' and the variable code equals itself times 2
// We then check if the variable code is greater than 250 and if it is then the variable secret equals 'duper'
// We then console.log the value secret; because the orginal variable code equaled 123 and now equals 246, the value will be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make three variables where isStudent equals true, age equals 34, and zip equals 55407
// We check if isStudent equals true and the zip is greater than 80000
// If that is true we console.log 'You're a student on the West Coast'
// If isStudent is fale or the age is less than 30, we console.log 'What are your hobbies?'
// If just isStudent is true, we console.log 'Welcome to Prime!'
// If none of those statements are true, we then console.log 'How about the weather?'
// Because isStudent is true, but the zip is less than 80000, we console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should equal blue and colorTwo should equal red.
// Should be let colorOne = 'blue'; let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX colorTwo should also be set to 'purple'
// Should be colorOne = 'purple'; colorTwo = 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX || is checking between two variables (or), not both (and)
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX the age is greater than or equal to minAge so the first console.log should be 'enter'
// Should be if(minAge <= age) {console.log('enter');} else {console.log('no entry');}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

