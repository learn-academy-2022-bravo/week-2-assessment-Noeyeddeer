# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is the placeholder to pass in a function argument. Consider the following:

  let arr1 = ["dogs", "are", "great"]

  const myFunction() = (array) => {
    return array
  }

  console.log(myFunction(arr1))

  In the example above "array" on line 15 is the parameter and is the placeholder for passing arr1 into the function on line 19. Therefore, array tells the function where to look for input to be run through the function. The argument is the actual data or variable passed into the function for evaluation.

  Researched answer: Parameters are the names listed in a function's definition whereas arguments are the real values passed into the function.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: One of the predefined parameters is a value of some sort which corresponds to the argument being passed in to .map(). On the other ones I'm not too sure.

  Researched answer: There are three predefined parameters: 1) currentValue, this is the value of the current element and is required, 2) index, this is the index of the current element and is optional, and 3) arr, this is the array of the current element and is also optional.



3. What is the difference between map and filter?

  Your answer: Map and filter are both higher order functions but map takes an array and returns each value in the array based on what modifications were made to those values within the function, whereas filter returns only the values which meet criteria specified within the function.

  Researched answer: Map generates a new array based on your existing array but keeps the same number of elements whereas filter checks to see if a return value is true and if not it removes that value from the new array.



4. What is the difference between a function and a method?

  Your answer: A function is an object that contains a block of code which can be executed when that function is called, a method is a function that is placed inside of an object or class.

  Researched answer: A function can be called directly by its name whereas a method needs to be called using the name of its object then the mothod name. Additionally, a function lives on its on wheras a method is a function associated with an object property.



5. What is object destructuring?

  Your answer: Object destructuring is the accessing of object elements outside of an object.

  Researched answer: Object destructuring makes it possible to unpack properties from objects into distinct variables. In other words, the syntax of destructuring allows you to take values contained within an object and access them outside of that object without using the standard dot notation and parentheses usually required to access an object value.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I am not completely sure, perhaps calling a block of code located in a different logical space?

  Researched answer: Hoisting is Javascript's default behavior of moving declaration to the top. In other words, say you wanted to declare the variable john. You can put var john anywhere in your code that you want because JavaScript will automatically put it at the "top" of your code, meaning that during code execution your variable declaration will be read first. This does not work for initialization, i.e. var john = 10.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: A class can inherit information from a previously created class by using extend and super(), which pass the data, behavior, and constructor attributes from the "parent" to the "child" class.

2. React: React is a JavaScript library that can be used to build webpages, mobile webpages, and mobile applications. It's main building blocks are components, which are similar to functions and can be put together to build an entire webpage or application.

3. React state: A React state is a React class component used for managing data.

4. React lifecycle methods: Lifecycle methods is a feature of a React component which you can override to run code at particular times in a process.

5. DOM: DOM stands for Document Object Model and it is used to link Javascript code with HTML in order to generate webpages which can run functioning JavaScript code.
