console.log("hello world");
/* 
	? JavaScript
	* was founded 1996 by Brandon Eich
	* client-side language (runs in the browser)
	* interpreted language, not compiled
	* functional language
	* object-oriented language
	* prototype-based
	* imperative
	* weakly typed or duck-typed - does not require data type definition
	* governed by ECMAScript - organization setting language standards
*/

// ? Single line comment ctrl + /

/* 
	? multi-line comment
	* option/alt + shift + A
*/

/* 
	? console.log()
	* a method on a console object
	* console object gives us acess to browser or node's debug tools
	* allows us to display content to the terminal
	* mostly used for debugging
*/

/* 
	? Variables
	* container that stores data in memory
	* a box that holds something for you
	* declaration
		* allows memory space to be reserved
		* start with let, var, or const keyword
		* if no value is assigned, it's value is undefined
	* initilization
		* assignment of data value
		* can be any value or data type (str, int, arr, fx, class, etc.)
		* can be reassigned (except for const)
*/

// variable declaration
/* let firstName
console.log(firstName)

// variable declaration and initilization

let lastName = "Niemczyk"
// keyword; declaration space name; assignment operator; string value
console.log(lastName)

var exampleVar = "this is an example of var variable"
console.log(exampleVar)
// ! outdated, should not be used

// variable redeclaration (reassignment)
lastName = "Leonardo"
console.log(lastName)

// const keyword
const SSN = 666060606
console.log(SSN)

// SSN = 667080808
// ! TypeError - value cannot be reassigned when using const
console.log(ssn)

// const color
// ! SyntaxError - what's the point of creating a variable if it's undefined and cannot be reassigned?
console.log(color)

/* 
	? Coding Practices for Variables
	* be concise (ex: firstName instead of myUserFirstName)
	* be specific (ex: value instead of i)
	* utilize camelCase (most popular in JS)
	* snake_case (popular for files and variables)
	* PascalCase (popular for classes and prototypes)
	* skewer-case (files ETC)
	* nocase
	* SCREAMING_CASE (for const)
*/

const age = 18;
const country = "Germany";

if (typeof age !== "number" || age <= 0 || age >= 110) {
  console.log("Invalid age, can't check anything");
} else if (country !== "US" && country !== "Germany") {
  console.log("Invalid entry, choose between US and Germany");
} else {
  const canDrink =
    (age >= 21 && country === "US") || (age >= 18 && country === "Germany");
  const canDrive =
    (age >= 16 && country === "US") || (age >= 18 && country === "Germany");
  if (canDrink && canDrive) {
    console.log("You can legally drink and drive, just never at the same time");
  } else if (canDrive) {
    console.log("You can drive, but you cannot drink yet");
  } else {
    console.log("You cannot drink or drive yet");
  }

  // Age status, its own check
  if (age < 18) {
    console.log("You are underage");
  }
}
