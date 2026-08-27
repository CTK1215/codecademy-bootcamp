/* 
	? Conditionals & Logic Gates
	* conditional is a statement checking if an expression is truthy
	* the expression must always resolve to true
	* if an expression is false, nothing happens
	* if an expression is true, a code block executes
*/

/* 
	? If Statement
	* checks is something is true and executes

	? Syntax

	if (condition/expression) {
		code block to execute if condition is true
	}
*/

let lightSwitch = "off";

// keyword; expression; code block
if (lightSwitch === "on") {
  console.log("The light is on");
}

// let hasTurbo = "no" // resolves to true because of string Boolean value

let hasTurbo = false;

if (hasTurbo) {
  console.log("The car has turbo");
}

/* 
	? Else Statement
	* if all else fails, execute the code
*/

if (hasTurbo) {
  console.log("The car has a turbo");
} else {
  console.log("No turbo");
}

console.log("Code executing after our conditional");

/* 
	? Else If Statement
	* allows us to add extra expressions to check against
*/

let temp = 82;

if (temp >= 80) {
  console.log("Summer");
} else if (temp >= 60) {
  console.log("Spring");
} else {
  console.log("Cold");
}

if (temp >= 80) {
  console.log("The summer");
}

if (temp >= 60) {
  console.log("The Spring");
}

console.log("Cold");

// ! example of a LOGIC ERROR

/* 
	? Logic Operators NOT AND OR
	* OR Operator (||)
		* true if one of the conditions is true
		* ex: happy if i get dinner or have a beer
		* beer + dinner == true
		* no beer + dinner == true
		* beer + no dinner == true
		* no beer + no dinner == false
	* AND Operator (&&)
		* true if both conditions are true
		* ex: happy if i get dinner and have a beer
		* dinner + beer == true
		* no dinner + beer == false
		* dinner + no beer == false
		* no dinner + no beer == false
	* NOT Operator (! or != or !==)
		* flips the condition
		* falsey 
		* !false resolves to true
*/

let hasBeer = false;
let hasDinner = true;

if (hasBeer || hasDinner) {
  console.log("OR Happy");
}

if (hasBeer && hasDinner) {
  console.log("AND Happy");
}

if (!hasBeer) {
  console.log("NOT I'm happy because I have no beer (weird)");
}

if (hasBeer !== true) {
  console.log("NOT I'm happy because I have no beer (weird)");
}

/* 
	? Challenge
	* answer in Discord in #project-showcase
	* create an age variable
	* create a country variable
	* if a user is > 21 and country is US, they can drink
	* if a user is > 18 an country is Germany, they can drink
	* if a user is > 16 and country is US, they can drive
	* if a user is > 18 and the country is Germany, they can drive
	* if a user is < 18 the user is underage
	! Spicey Mode: what if the value of a variable is something wrong? How will you handle it?
*/

// ? Error handling example

let email = "";

if (!email) {
  console.log("Please enter an email");
}

/* 
	? Ternary Syntax:

	Syntax:

	* conditional ? code block if true : code block if false

	* used for quick checks, popularized within React

*/

let speed = 100;

// if (speed > 100) {
// 	console.log("we're likely on a fast road")
// } else {
// 	console.log(`Your speed is ${speed}`)
// }

speed > 100
  ? console.log("we're likely on a fast road")
  : console.log(`Your speed is ${speed}`);

// speed > 100 ? console.log("test") // SyntaxError - always needs an else statement

// ? Super mini challenge - how could you write a ternary without an else statement then?

// Lil' cheat
speed > 100 ? console.log("First condition") : null;

let age = 20;

// the : becomes an else if instead of an else
age < 18
  ? console.log("You're a teenager")
  : age < 21
    ? console.log("You can travel but not drink in the US")
    : age >= 21
      ? console.log("You can drink")
      : null;

/* 
	? Switch Statement
	* executes a block of code dependent on a case
	* switch will continue thru all cases even if it meets true expression
	* requires to be stopped using break keyword
*/

let teacher = "Dave";

switch (teacher) {
  // information cases will be compared against
  case "Paul":
    // condition that's compared against switch
    // execute the code below
    console.log(`${teacher} is the instructor`);
    break;
  // used to stop other cases from evaluating
  case "Tyler":
    console.log(`${teacher} is the instructor`);
    break;
  default:
    // an 'else' statement
    console.log(`${teacher} is not the instructor here`);
}

console.log(temp);

// switch on true because the expression is in the case here
switch (true) {
  case temp >= 80:
    console.log("summer");
  case temp >= 60:
    console.log("fall");
}

// above logs both because we didn't use a break statement

/* 
	? FizzBuzz Challenge
	* create a variable called myNumber and assign it to any number
	* build a condition that checks the following:
	* if the number is divisible by 3, log "Fizz"
	* if the number is divisible by 5, log "Buzz",
	* if the number is divisible by both, log "Fizz Buzz"
	* if the number is NOT divisible by 3 or 5, log the number
	* rewrite as a ternary
	* rewrite as a switch
*/

// let's spend 15 minutes tryign to complete :50

let myNumber = 15;

if (myNumber % 15 === 0) {
  console.log("Fizz Buzz");
} else if (myNumber % 5 === 0) {
  console.log("Buzz");
} else if (myNumber % 3 === 0) {
  console.log("Fizz");
} else {
  console.log(myNumber);
}

/* 
	! Good general rule of thumb when it comes to logic !
	! write your conditions from most to least restrictive !
*/

myNumber % 15 === 0
  ? console.log("Fizz Buzz")
  : myNumber % 5 === 0
    ? console.log("Buzz")
    : myNumber % 3 === 0
      ? console.log("Fizz")
      : console.log(myNumber);

switch (true) {
  case myNumber % 15 === 0:
    console.log("Fizz Buzz");
    break;
}
