// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: This will log an array with every character of the string "Bravo 2022" separated and listed as an individual character in the array.
// b) Verify and explain: .split() changes a string into an array while leaving the original elements the same. If quotes are used inside of the .split() parentheses then the array consist of each letter in the string separated as its own array element.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: It will log undefined.
// b) Verify and explain: There is no return statement in the function. In the example, greeter is a function and name is the parameter. When the function of greeter is called, "LEARN Student" is passed in. However, without including a return next to `Hello, ${name}!`, the function does not know what the output is meant to be and so returns an undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: It will log the array [8, 10, 12, 14, 16].
// b) Verify and explain: The variable multBy2 is established as equal to an array which is passed into the higher order function .map(), which then iterates through each value in the array and performs a specified action to each one. In this case that action is multiplication by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: It will log the array [11, 13, 15].
// b) Verify and explain: Similar to question #3, this code establishes the variable onlyOdds as equal to an array passed into the .filter() function. This higher order function iterates through the array like .map() does but it only return values that correspond to specified parameters, in this case any value whose remainder when divided by two does not equal 0 (which is any odd number).


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: It will log "Javascript".
// b) Verify and explain: myCodingSkills is here established as an object containing several key:value pairs. When we console.log myCodingSkills.languages[0] we are accessing the languages key and returning the element at the 0 index of the languages value array, which in this case is JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will log {[student: George, cohort: Bravo, year: 2022]}
// b) Verify and explain: I was wrong about it logging the key:value pairs in an array but I was correct concerning the output. In the pre-established class Learn, we have an object with three key:value pairs. Only one of them has been established as variable based on input, that one being this.student = name. Because name is also a parameter in the constructor function, we can pass in a name whenever we create a new class (learnStudent) and the output will reflect our input.
