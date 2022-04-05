// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisibleByThree", () => {
  it("returns whether a number is divisible by three based on input", () => {
    expect(divisibleByThree(15)).toEqual("15 is divisible by three")
    expect(divisibleByThree(0)).toEqual("0 is divisible by three")
    expect(divisibleByThree(-7)).toEqual("-7 is not divisible by three")
  })
})

// FAIL  ./code-challenges.test.js
//   divisibleByThree
//     ✕ returns whether a number is divisible by three based on input (1 ms)
//
//   ● divisibleByThree › returns whether a number is divisible by three based on input
//
//     ReferenceError: divisibleByThree is not defined
//
//       30 | describe("divisibleByThree", () => {
//       31 |   it("returns whether a number is divisible by three based on input", () => {
//     > 32 |     expect(divisibleByThree(15)).toEqual("15 is divisible by three")
//          |     ^
//       33 |     expect(divisibleByThree(0)).toEqual("0 is divisible by three")
//       34 |     expect(divisibleByThree(-7)).toEqual("-7 is not divisible by three")
//       35 |   })
//
//       at Object.<anonymous> (code-challenges.test.js:32:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.142 s, estimated 1 s

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function and name it divisibleByThree
// Set a parameter for the function named number
// Write the code which will determine whether a given number is divisible by three
// Use an if else statement to take an argument and return `${argument} is divisible by three` if it meets the parameter of % 3 === 0 and `${argument} is not divisible by three` if it does not
// Call the function three times, passing in num1, num2, and num3 each time to test the function and provide the expected output
const divisibleByThree = (number) => {
  if (number % 3 === 0){
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

divisibleByThree(num1)
divisibleByThree(num2)
divisibleByThree(num3)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("firstCaps", () => {
  it("returns an array with words capitalized", () => {
    expect(firstCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(firstCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// FAIL  ./code-challenges.test.js
//  firstCaps
//    ✕ returns an array with words capitalized
//
//  ● firstCaps › returns an array with words capitalized
//
//    ReferenceError: firstCaps is not defined
//
//      93 | describe("firstCaps", () => {
//      94 |   it("returns an array with words capitalized", () => {
//    > 95 |     expect(firstCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         |     ^
//      96 |     expect(firstCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//      97 |   })
//      98 | })
//
//      at Object.<anonymous> (code-challenges.test.js:95:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function and name it firstCaps
// Set a parameter called array
// Write the code that will take an array of words as an input and return an an array with all words capitalized
// Return a mapped array using .map()
// Set the map value to array and identify the first character of each word using charAt(0)
// Capitalize first letter using toUpperCase()
// Join capitalized first letter with rest of string using + .slice(1)
// Call the function twice, passing in randomNouns1 and randomNouns2 as arguments
const firstCaps = (array) => {
  return array.map(array => array.charAt(0).toUpperCase() + array.slice(1))
}

firstCaps(randomNouns1)
firstCaps(randomNouns2)
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("returns first value in a string based on input", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// FAIL  ./code-challenges.test.js
//  firstVowel
//    ✕ returns first value in a string based on input
//
//  ● firstVowel › returns first value in a string based on input
//
//    ReferenceError: firstVowel is not defined
//
//      149 | describe("firstVowel", () => {
//      150 |   it("returns first value in a string based on input", () => {
//    > 151 |     expect(firstVowel(vowelTester1)).toEqual(1)
//          |     ^
//      152 |     expect(firstVowel(vowelTester2)).toEqual(0)
//      153 |     expect(firstVowel(vowelTester3)).toEqual(2)
//      154 |   })
//
//      at Object.<anonymous> (code-challenges.test.js:151:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.145 s, estimated 1 s

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// Pseudo Code
// Create a function called firstVowel
// Set a parameter called string
// Write the code that will take in a string and log the index of the first vowel
// Write a for loop, setting the length to i < string.length
// Write a conditional statement which says if the index of the string is equal to a value, return that index
// Call the function three times, passing in vowelTester1, vowelTester2, and vowelTester3 as arguments

// b) Create the function that makes the test pass.
const firstVowel = (string) => {
  for(let i = 0; i < string.length; i++){
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
    return string.indexOf(string[i])
    }
  }
}

firstVowel(vowelTester1)
firstVowel(vowelTester2)
firstVowel(vowelTester3)
