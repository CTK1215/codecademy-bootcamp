/* 
	? Functions
	* a block of reusable code
	* takes parameters
	* performs an action
	* returns a result
		* if no return specified, default is undefined
	
	* function declaration
	* function expression
		* expression function
		* concise arrow function
		* block function
	* Immediately Invoked Function Expression (IIFE)
	
	* syntax:

	function identifier(parameter, parameter, ...) {
		function code block
		return statement
	}
*/

// Function declaration
function sayHello() {
	console.log("Hello fullstack 11 folks!");
	return "Hello fullstack 11 folks! actually being returned";
}

// Function invocation or callling a function

// sayHello()

let resultFromFunction = sayHello() + "potato";

console.log("this is the actual result", resultFromFunction);

// ? Parameters are like doors into your function

function addNums(num1, num2) {
	let result = num1 + num2;
	console.log("this is the result of the console log", result);
	return result;
}

// ? values passed into parameters are called arguments
console.log(addNums(5, 7));

let one = 1;
let seven = 7;

let myResult = addNums(one, seven);
console.log("this is the return of addNums when console logged", myResult);

/* 
	? Function Expression
	* utilizes a variable as an identifier
*/

let concatStrings = function (str1, str2) {
	// !IMPORTANT function can only return ONE item

	// arguments is a keyword that allows us access to parameters as an object
	console.log(arguments[0], arguments[1]);

	return `${str2} ${str1}`;
};

console.log(concatStrings("Troy", "Brannon"));

/* 
	? Functions help with DRY Principle
	* do not repeat yourself
*/

function countVowels(str) {
	let count = 0;
	let sanitized = str.toLowerCase();

	for (l of sanitized) {
		if (l === "a" || l === "e" || l === "o" || l === "u" || l === "i") {
			count++;
		}
	}

	return count;
}

countVowels("spider man movie");

let paulsNameVowels = countVowels("Paul Niemczyk");
console.log(paulsNameVowels);
console.log(countVowels("Troy Brannon"));
console.log(countVowels("Dave"));
console.log(countVowels("David Leonardo"));
console.log(countVowels("a"));

/* 
	? Arrow Functions
	* introduced in ES6
	* concise way of writing functions
	* think of them as ternaries but for functions
	* part of fx expressions
	* do not bind to this or super (we'll talk about those in classes)
*/

/* 
	? Concise
	* fx expression
	* defined by => in lieu of body
	* has one or no parameter
	* if it has one can be wrapped in () or none
	* code block does not have {}
	* return statements are implicit here not explicit
*/

let greetEveryone = () => "Welcome everyone";
console.log(greetEveryone());

let isUser = bool => (bool ? "Is User" : "Not User");

console.log(isUser(true));
console.log(isUser(false));

/* 
	? Block Body
	* can have many parameters
	* has a block of code
	* has explicit returns
*/

let reverseStr = str => {
	let result = "";

	for (let i = str.length - 1; i >= 0; i = i - 1) {
		result += str[i];
	}

	return result;
};

console.log(reverseStr("mary had a little lamb"));

/* 
	? IIFE
	* runs immediately without a need of invocation
*/

(function () {
	console.log("IIFE");
})();



const fizzBuzz = (start, stop) => {
  for (let i = start; i <= stop; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(10, 200000);
