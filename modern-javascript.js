//Javascript function syntax
// function name(p1, p2, p3) {
//   // your code goes here
// }
// A function is defined with the function keyword, followed by the function name, followed by parentheses ( ), followed by brackets { }.

//Ways to write a function in JavaScript
// Function Declaration
//syntax
// function functionName(parameter 1, parameter 2) {
//     //code to be executed
//     return result; //optional: if thres a value to be returned
// }

// //example
// function add(a, b) {
//   return a + b;
// }

// Function Expression: assigning a function to a variable

//syntax
// const functionName = function (param1, param2) {
//   //code to be executed
//   return result;
// };

// //example
// const subtract = function (a, b) {
//   return a - b;
// };

// Arrow Function
// const multiply = (a, b) => {
//   return a * b;
// };

// // Shorter Arrow Function
// const divide = (a, b) => a / b;

/////////////////////////////////////////////////////////////////////////////
// Function parameters and arguments
// Function parameters are variables listed inside the parentheses in a function's definition. They act as placeholders for the values that will be passed into the function when it is called.

// function greet(name, age) {
//   // 'name' and 'age' are parameters
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// Default Parameters: JavaScript allows you to set default values for parameters. If an argument for a parameter with a default value is not provided during the function call, the default value is used.

// function sayHello(name) {
// let name = "Guest"

//   console.log(`Hello, ${name}!`);
// }

// sayHello(); // Output: "Hello, Guest!"
// sayHello("Bob"); // Output: "Hello, Bob!"

// Arguments are the actual values or expressions that are passed to a function when it is called or invoked. They are the concrete data that the function operates on.

/////////////////////////////////////////////////////////////////////////////////////////////
//Objects can be created in several ways, including:
// 1. Object Literals: This is the most common and concise way to create objects, using curly braces {} to define properties and their values.

// const person = {
//     name: "Alice",
//     age: 30,
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// 2. Object Constructor:  This uses the Object constructor to create an empty object, to which properties can then be added.

// const person = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });

// 3.Constructor Functions: These are regular functions used with the new keyword to create multiple instances of objects with similar structures.

// function Book(ParamTitle, ParamAuthor) {
//     this.title = ParamTitle;
//     this.author = ParamAuthor;
// }
// const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
// const kenesBook = new Book("Ada goes to school", "Marvin")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating arrays in JavaScript
// JavaScript arrays can be created using several methods:
// 1.Array Literal: This is the most common and recommended way. You enclose a comma-separated list of values within square brackets [].
// let fruits = ['apple', 'banana', 'cherry'];
// let numbers = [1, 2, 3, 4, 5];
// let mixedArray = [10, 'hello', true]; // Arrays can hold mixed data types

// 2.Array() Constructor: You can use the new Array() constructor.
// let numbers = new Array(1, 2, 3, 4, 5); // Creates an array with the specified elements
// let colors = new Array('red', 'green', 'blue'); //['red', 'green', 'blue']
// let emptyArray = new Array(); // Creates an empty array
// let sizedArray = new Array(5); // Creates an array with 5 empty slots
// Note: If you pass a single number to new Array(), it sets the length of the array, not an initial element.

// 3.Array.of() Method: Creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.
// let letters = Array.of("a", "b", "c");
// console.log(letters);
// let singleElementArray = Array.of(7); // Creates an array with one element: [7]

// 4.Array.from() Method: Creates a new, shallow-copied Array instance from an array-like or iterable object.
// let stringToArray = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

//Accessing JavaScript Array Elements
// Array elements are accessed using their index, which starts from 0 for the first element.

// 1. Square Bracket Notation: Use the array name followed by square brackets containing the index.

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits[0]); // Outputs: 'apple'
// console.log(fruits[1]); // Outputs: 'banana'
// console.log(fruits[2]); // Outputs: 'cherry'

// 2.Array.at() Method (ES2022): Provides a way to access elements using positive or negative indices. Negative indices count from the end of the array.

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.at(0));  // Outputs: 10 (first element)
// console.log(numbers.at(-1)); // Outputs: 50 (last element)
// console.log(numbers.at(-2)); // Outputs: 40 (second to last element)

// 3. Looping through Arrays: Iteration methods like for, forEach, for...of, map, filter, are used to access multiple elements sequentially.

// Example of using for loop to access elements
// let colors = ["red", "green", "blue"];
// let studentAges = [13, 12, 18, 16, 20];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Example of using forEach to access elements
// colors.forEach(function(color) {
//     console.log(color);
// });

// Example of using for...of to access elements
// for (const color of colors) {
//     console.log(color);
// }

// Example of using map to access elements
// const upperCaseColors = colors.map((color) => color.toUpperCase());
// console.log(upperCaseColors); // Outputs: ['RED', 'GREEN', 'BLUE']
// const longColorsMap = colors.map((color) => color.length > 3);
// console.log(longColorsMap); // Outputs: ['green', 'blue']

// Example of using filter to access elements
// const longColors = colors.filter((color) => color.length > 3);
// console.log(longColors); // Outputs: ['green', 'blue']

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Array Methods

// 1. Mutating Methods: They Change the Original Array 💥
// These methods modify the array they are called on. It's like changing the contents of a shopping cart directly. We'll start with one array and see how it changes with each method

// let fruits = ["apple", "banana", "orange"];
// console.log("Original Array:", fruits);

// 1. push(): Adds one or more elements to the end of an array.
// console.log("\n--- push() ---");
// fruits.push("grape", "pear");
// console.log("After push():", fruits); // ['apple', 'banana', 'orange', 'grape']

// // 2. pop(): Removes the last element from an array.
// console.log("\n--- pop() ---");
// fruits.pop();
// console.log("After pop():", fruits); // ['apple', 'banana', 'orange']

// // 3. unshift(): Adds one or more elements to the beginning of an array.
// console.log("\n--- unshift() ---");
// fruits.unshift("kiwi");
// console.log("After unshift():", fruits); // ['kiwi', 'apple', 'banana', 'orange']

// // 4. shift(): Removes the first element from an array.
// console.log("\n--- shift() ---");
// fruits.shift();
// console.log("After shift():", fruits); // ['apple', 'banana', 'orange']

// 5. splice(): Changes the contents of an array by removing, replacing, or adding elements.
// console.log("\n--- splice() ---");
// // Removes 'banana' and 'orange' and inserts 'mango' and 'pineapple'
// fruits.splice(1, 2, "mango", "pineapple");
// console.log("After splice():", fruits); // ['apple', 'mango', 'pineapple']

// // 6. sort(): Sorts the elements of an array in place.
// console.log('\n--- sort() ---');
// const numbers = [40, 1, 5, 200];
// numbers.sort();
// console.log('After sort():', numbers); // [1, 40, 5, 200] (Note: Sorts as strings by default)

// // To sort numbers correctly:
// numbers.sort((a, b) => a - b);
// console.log('After numeric sort:', numbers); // [1, 5, 40, 200]

// // 7. reverse(): Reverses the order of the elements in an array in place.
// console.log("\n--- reverse() ---");
// fruits.reverse();
// console.log("After reverse():", fruits); // ['pineapple', 'mango', 'apple']

// 8. fill(): Fills all the elements of an array from a start index to an end index with a static value.
// console.log("\n--- fill() ---");
// fruits.fill("grape", 1, 2);
// console.log("After fill():", fruits); // ['pineapple', 'grape', 'apple']

// 2. Non-Mutating Methods: They Return a New Array or Value ✨
// These methods do not change the original array. Instead, they return a new array or a new value. Think of this as getting a copy of your shopping cart and making changes to the copy, leaving your original cart untouched.

const originalNumbers = [1, 2, 3, 4, 5];
const originalFruits = ["apple", "banana", "orange", "mango"];

// 1. map(): Creates a new array with the results of calling a provided function on every element.
// console.log("--- map() ---");
// const doubled = originalNumbers.map((number) => {
//   return number * 2;
// });
// console.log("New array:", doubled); // [2, 4, 6, 8, 10]
// console.log("Original array is unchanged:", originalNumbers);

// // 2. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// console.log('\n--- filter() ---');
// const evens = originalNumbers.filter(number => number % 2 === 0);
// console.log('New array:', evens); // [2, 4]
// console.log('Original array is unchanged:', originalNumbers);

// 3. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
// console.log('\n--- reduce() ---');
// const sum = originalNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log('New value:', sum); // 15
// console.log('Original array is unchanged:', originalNumbers);

// // 4. forEach(): Executes a provided function once for each array element. It does not return anything.
// console.log('\n--- forEach() ---');
// let total = 0;
// originalNumbers.forEach(number => {
//   total += number;
// });
// console.log('Value from forEach:', total); // 15
// console.log('Original array is unchanged:', originalNumbers);

// // 5. slice(): Returns a shallow copy of a portion of an array into a new array object.
// console.log("\n--- slice() ---");
// const slicedFruits = originalFruits.slice(1, 3); // From index 1 up to (but not including) index 3
// console.log("New array:", slicedFruits); // ['banana', 'orange']
// console.log("Original array is unchanged:", originalFruits);

// // 6. concat(): Merges two or more arrays, returning a new array.
// console.log('\n--- concat() ---');
// const moreFruits = ['grape', 'kiwi'];
// const combinedFruits = originalFruits.concat(moreFruits);
// console.log('New array:', combinedFruits); // ['apple', 'banana', 'orange', 'mango', 'grape', 'kiwi']
// console.log('Original array is unchanged:', originalFruits);

// // 7. join(): Joins all elements of an array into a string.
// console.log("\n--- join() ---");
// const fruitString = originalFruits.join(", ");
// console.log("Original array:", originalFruits);
// console.log("New string:", fruitString); // "apple, banana, orange, mango"

// // 8. includes(): Checks if an array includes a certain element, returning a boolean.
// console.log('\n--- includes() ---');
// const hasBanana = originalFruits.includes('banana');
// console.log('Includes "banana"?', hasBanana); // true
// console.log('Original array is unchanged:', originalFruits);

// // 9. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log('\n--- indexOf() ---');
// const bananaIndex = originalFruits.indexOf('banana');
// console.log('Index of "banana":', bananaIndex); // 1
// const kiwiIndex = originalFruits.indexOf('kiwi');
// console.log('Index of "kiwi":', kiwiIndex); // -1
// console.log('Original array is unchanged:', originalFruits);

// // 10. find(): Returns the first element in the array that satisfies the provided testing function.
// console.log('\n--- find() ---');
// const firstLongFruit = originalFruits.find(fruit => fruit.length > 5);
// console.log('First fruit with > 5 letters:', firstLongFruit); // "banana"
// console.log('Original array is unchanged:', originalFruits);

// // 11. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
// console.log('\n--- findIndex() ---');
// const firstLongFruitIndex = originalFruits.findIndex(fruit => fruit.length > 5);
// console.log('Index of first fruit with > 5 letters:', firstLongFruitIndex); // 1
// console.log('Original array is unchanged:', originalFruits);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// try.....catch.....finally

//syntax

try {
  //Code you want to execute that may potentially throw an error
  fetchMovies();
  displaymovies();
} catch (error) {
  // Code to execute if an error occurs in the 'try' block
  // 'error' is a local variable representing the error object
  console.log("Something went wrong");
} finally {
  killfetchfromserver();
  // Code that will always execute, regardless of whether an error occurred or not
}

//Real-world example
//Imagine youre writing the code for an ATM machine. You want to try to dispense cash, but if theres an error (like insufficient funds), you want to catch that error and display a message to the user. Finally, you want to log the customers current acct balance whether it was successful or not, and give them their ATM card back.

// This function simulates trying to withdraw money from an account.
// function withdrawMoney(balance, amountToWithdraw) {
//   try {
//     console.log("Step 1: Trying to withdraw money...");

//     // Check if the withdrawal is possible.
//     if (amountToWithdraw > balance) {
//       // This is the "error" happening.
//       throw new Error("Insufficient funds in the account.");
//     }

//     // This code only runs if the withdrawal is successful.
//     balance = balance - amountToWithdraw;
//     console.log(`Step 2: Successfully withdrew $${amountToWithdraw}.`);

//     return balance;

//   } catch (error) {
//     // This code runs only if an error was "thrown" in the try block.
//     console.error("Step 2 (Error): Oops! An error occurred:", error.message);

//   } finally {
//     // This code ALWAYS runs, regardless of success or failure.
//     console.log(`Your current balance: $${balance}`);
//     console.log("Step 3: Always remember to give the customer's card back.");
//   }
// }

// // Example 1: Successful withdrawal
// console.log("--- Customer 1: Trying to withdraw $50 from a $100 balance ---");
// const newBalance = withdrawMoney(100, 50);
// console.log("New balance:", newBalance);

// console.log("\n-------------------------------------------------------------");

// // Example 2: Failed withdrawal
// console.log("--- Customer 2: Trying to withdraw $150 from a $100 balance ---");
// const failedBalance = withdrawMoney(100, 150);
// console.log("New balance:", failedBalance); // Will be undefined because the catch block doesn't return anything.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Javascript scope illustrations

// 1. Global Scope:
// Variables declared outside of any function or block have global scope. They are accessible from anywhere in your code.

// var globalVariable = "I am accessible everywhere";

// function accessGlobal() {
//   console.log(globalVariable); // Accessible here
// }

// accessGlobal(); // Output: I am accessible everywhere
// console.log(globalVariable); // Accessible here

// 2. Function Scope:
// Variables declared with var inside a function have function scope. They are only accessible within that function.

// function greet() {
//   var message = "Hello from function scope!";
//   console.log(message); // Accessible here
// }

// greet(); // Output: Hello from function scope!
// // console.log(message); // Uncaught ReferenceError: message is not defined

// 3. Block Scope:
// Variables declared with let and const inside a block (e.g., within if statements, for loops, or simply curly braces {}) have block scope. They are only accessible within that specific block.

// if (true) {
//   let blockVariable = "I am inside the block";
//   console.log(blockVariable); // Accessible here
// }

// // console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined

// for (let i = 0; i < 1; i++) {
//   const loopConstant = "I am a constant in the loop";
//   console.log(loopConstant); // Accessible here
// }

// console.log(loopConstant); // Uncaught ReferenceError: loopConstant is not defined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the `this` keyword in JavaScript

// 1. this in an Object Method
// When a function is called as a method of an object, this refers to that object. This is a fundamental concept for object-oriented programming in JavaScript.

// // Define an object with properties and a method
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,

//   // This is a method on the 'user' object
//   getFullName: function() {
//     // Inside this method, 'this' refers to the 'user' object itself
//     return `${this.firstName} ${this.lastName}`;
//   },

//   getAge: function() {
//     // We can access other properties of the object using 'this'
//     return this.age;
//   }
// };

// console.log(user.getFullName()); // Output: "John Doe"
// console.log(user.getAge());      // Output: 30

// 2. this Alone (Global Context)
// When this is used outside of any function or object, it refers to the global object. In a browser, this is the window object. In Node.js (common for backend development), this is the global object.

// // In Node.js, 'this' will refer to the global object.
// console.log(this === global); // Output: true

// // In a browser, 'this' will refer to the window object.
// // console.log(this === window); // This would be true in a browser console.

// // You can create a property on the global object
// this.name = 'Global Scope';
// console.log(name); // Output: "Global Scope"
// This is less common in modern backend development, as it can lead to unintentional side effects by polluting the global namespace.

// 3. this in a Regular Function
// When a function is called as a standalone function (not as a method of an object), this also refers to the global object (or window in a browser). This is one of the most confusing aspects for beginners.

// function showGlobalContext() {
//   // In a regular function call, 'this' refers to the global object
//   console.log(this);
// }

// // Calling the function directly
// showGlobalContext(); // Output: The global object (e.g., 'global' in Node.js)
//  //This behavior is a common source of bugs and highlights the importance of understanding the call context.

// 4. this in a Function (Strict Mode)
// To address the confusing behavior of this in regular functions, strict mode ('use strict';) was introduced. In strict mode, this in a standalone function is undefined, not the global object. This is a much safer and more predictable default.

// 'use strict';

// function showStrictContext() {
//   // In strict mode, 'this' is undefined in a regular function
//   console.log(this);
// }

// showStrictContext(); // Output: undefined
// // This is the recommended practice for modern JavaScript development.

// 5. this in an Event Handler
// In a browser environment, this inside an event handler function refers to the specific DOM element that triggered the event. This is crucial for manipulating the element that was clicked, hovered over, etc.

//code example

// This example is for a browser environment, not Node.js
// Imagine an HTML button with id="myButton"
/* <button id="myButton">Click me</button>
 */

// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//   // Inside this event handler, 'this' refers to the button element itself
//   console.log(this.id);        // Output: "myButton"
//   this.textContent = 'Clicked!'; // Changes the button's text
// });
// // Here, this is a powerful tool that allows the event handler to be generic and reusable for any element without needing to know its specific ID or class beforehand.
