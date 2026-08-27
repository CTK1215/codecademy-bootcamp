/* 
	? Arrays
	* data type
	* reference data type, not primitive
	* denoted by square brackets []
	* iterable
	* has index
	* can hold any data type within it
	* can be nested
	* they're list-like
*/

// an example of an empty array
let arr = [];
console.log(typeof arr, arr);
// comes up as object - everything in JS is an object

// check array datatype by using instanceof and constructor
console.log(arr instanceof Array);

// ? Extra credit - you can use constructors to build object literals (line 14)

let arrViaConstructor = new Array();
console.log(arrViaConstructor);

console.log(Boolean(arr), "vs", Boolean(""));
// ! Empty arrays are not falsey!!

console.log(arr.length, "check if array is empty by running .length on it");

let usHolidays = ["Labor Day", "Halloween", "Thanksgiving"];

console.log(usHolidays);

// ? Accessing Array Items via Index

console.log(usHolidays[0]);

// ? Out of Bounds Without Error

console.log(usHolidays[5]); // throws undefined, not an error

// ? Array Value Reassignment

usHolidays[0] = "Columbus Day";

console.log(usHolidays);

let allDataTypesInMyArrayYo = ["string", 595985, true, undefined, {}];
console.log(allDataTypesInMyArrayYo);

// ? Array Nesting

let carGarage = [
  ["BMW", "Porsche", "Merceddes"],
  ["Mazda", "Honda", ["Mitsubishi", "Kia"]],
];

console.log(carGarage);

// ? Challenge - how would you console log Mazda?

console.log(carGarage[1][0]);
console.log(carGarage[1][2][0]);

/* 
	? Challenge
	* create a variable named fullStack11
	* assign it to an array
	* the array should contain a subarray with instructor name and title (Paul, Instructor)
	* it should also contain another subarray with a few student names
	* after you've completed it, access Paul's name and change it to Pablo
	* access Paul's title and ensure it's uppercased
	
	! SPICEY CHALLENGE:
	* algorithmically remove the last entry within the nested student array
*/
let fullStack11 = [
  ["Paul", "Instructor"],
  ["bishara", "Troy", "Sukh", "Dave"],
];

fullStack11[0][0] = "Pablo";
console.log(fullStack11);

fullStack11[0][1] = fullStack11[0][1].toUpperCase();
console.log(fullStack11);

fullStack11[1].pop();

console.log(fullStack11);

fullStack11[1][fullStack11[1].length - 1] = null;
console.log(fullStack11);

fullStack11[1].length = fullStack11[1].length - 1;
console.log(fullStack11);

fullStack11[1].length = fullStack11[1].length + 1;
console.log(fullStack11);

console.log("----------------------------------");

// ? EXTRA CREDIT

let make = ["BMW", "Audi", "Porsche"];
console.log(make);

let germanCars = make;
console.log(germanCars);

let firstName = "Paul";
console.log(firstName);

let lastName = firstName;
console.log(lastName);

germanCars[0] = "Mercedes";

console.log(make);
console.log(germanCars);

lastName = "Potato";
console.log(firstName);
console.log(lastName);

/* 
	? Array Shallow Copy
	* when an array is copied using pointers
	* it doesn't actually copy the array values
	* two different variables point to the same values
	* if a value changes in one spot, it will change in another
*/

// ? Array Deep Copy

let independentGermanCars = [];

for (i of make) {
  independentGermanCars[independentGermanCars.length] = i;
}

console.log(independentGermanCars);
independentGermanCars[0] = "Volkswagen";

console.log(make, independentGermanCars); 

// Build the array. Two subarrays: instructor info at index 0, students at index 1.
let fullStack11 = [
  ["Paul", "Instructor"],
  ["bishara", "Troy", "Sukh", "Dave"],
];

// Paul -> Pablo. Outer index 0 (instructor subarray), inner index 0 (the name).
fullStack11[0][0] = "Pablo";

// Uppercase the title. toUpperCase() returns a new string, so assign it back.
fullStack11[0][1] = fullStack11[0][1].toUpperCase();

// Spicy: pop() always removes the last item, whatever the length.
// Called on the INNER array (fullStack11[1]), not on fullStack11 itself.
fullStack11[1].length = fullStack11[1].length - 1;
console.log(fullStack11);

fullStack11[1].length = fullStack11[1].length - 1;
