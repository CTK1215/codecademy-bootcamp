/* 
	? Loops
	* allow us to execute a block of code repeatedly until an exit condition has been met
	* five types of loops
		* for
		* for of
		* for in
		* while
		* do while
	* syntax:

	for (expression) {
		code block
	}

	* where expression can be start; stop; step or iterator:iterable
	* iterator (ex: i) value placeholder for current loop state
	* iterable (ex: todo's) is a list of items that we can loop over
*/

/* 
	? For Loop
	* have start; stop; step
	* start is a placeholder value
	* stop is a stop condition for our loop
	* step increments the iterator by n amount
		* ex: i++ or i = i + 1 or i += 1
	* most powerful: allow control of start; stop; step
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let longWordEN = "supercalifragilisticexpialidocious";
console.log(longWordEN.length, "----------------------");

//    start   ;       stop           ;   step
for (let i = 0; i < longWordEN.length; i = i + 1) {
  // variable at the index of our iterator
  console.log(longWordEN[i]);
}

let myName = "Paul Niemczyk";
let reversedMyName = "";
console.log("initial value", reversedMyName);

// ? Challenge - reverse the string
// ! Spicey Mode - how about add the result to a new string called reverseResult?
console.log("--------------------------------");

for (let i = longWordEN.length - 1; i >= 0; i = i - 1) {
  console.log(longWordEN[i]);
  reversedMyName += longWordEN[i];
}

console.log("the reversed string is: ", reversedMyName);

/* 
	? For-in Loop
	* simple
	* takes iterable and iterator
	* returns an index value
*/

let longWordDE = "kraftfahrzeughapftpslichvesirechung";
console.log(longWordDE.length);

for (i in longWordDE) {
  console.log(`Index: ${i} - Value: ${longWordDE[i]}`);
}

// ? Quick Challenge - remove all vowels from the word and return a new vowel-less word
// letters: A, E, I, O, U:
// ! Spicey Mode - what if the letters are uppercase or lowercase?

let vowellessWord = "";

// if longWordDE[i] === "a", we would use || (easier solution)
// if longWordDE[i] !== "a", we would use &&

for (i in longWordDE) {
  if (longWordDE[i] !== "a" && longWordDE[i] !== "e" && longWordDE[i] !== "o") {
    vowellessWord += longWordDE[i];
  }
}

console.log(vowellessWord);

// TODO: talk your problems out loud. You will often come up with a logic solution

/* 
	? For-of Loop
	* just like for-in
	* returns the value instead of the index
*/

let longWordPL = "konstantynopolitanczykowianeczka";
console.log(longWordPL.length);

for (letter of longWordPL) {
  console.log(letter);
}

/* 
	? While Loop
	* executes a statement inside of a code block
	* it does so until it meets its stop condition
	
	* syntax: while (true) { do this }
*/

let count = 0;

while (count <= 10) {
  console.log(count);
  count += 1;
}

// ? Challenge - build me a countdown that counts down from 10 to 0 and then says blast off

let newCount = 10;

while (count >= 0) {
  console.log(count);
  count--;
}

console.log("Blast off!");

/* 
	? Do While
	* executes code in the do section
	* while (pun intended) a condition remains true
	! one way to get Paul roll his eyes at you is to use this monstrosity
*/

let doCount = 0;

do {
  console.log(doCount);
  doCount++;
} while (doCount <= 10);
