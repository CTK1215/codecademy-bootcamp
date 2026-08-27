/* 
	? Array Methods
	* method is a function
	* it lives on the object type (in this instance, Array constructor)
	* it's accessible by each instance of your object
	* dennoted by .nameOfMethod()
*/

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

/* 
	.push()
	* appends argument to the end of the array
	* returns new length of the array
*/

let pushResult = months.push("Oct");
console.log(months, "push() return:", pushResult);

/* 
	.pop()
	* removed last elements from an array
	* returns said element
*/

let popResult = months.pop();
console.log(months, "pop() return:", popResult);

/* 
	.unshift()
	* adds argument to the beginning of the array
	* returns the new lenth of the array
*/

let unshiftResult = months.unshift("months");
console.log(months, "unshift() return:", unshiftResult);

/* 
	.shift()
	* removes first element from an array
	* returns the removed element
*/

let shiftResult = months.shift();
console.log(months, "shift() return:", shiftResult);

/* 
	? Challenge
	* iterate thru our array and clear it out
	* while you clear it out, if the item is current month, console log it
	* console log the array once completed
*/

for (i of months) {
  let value = months.pop();

  if (value === "Aug") {
    console.log(value);
  }
}

console.log(months);

/* 
	? Advanced Array Methods
	* .forEach
	* .filter
	* .map
	* .reduce
	* allow us to parse thru data efficiently
*/

let states = [
  "Illinois",
  "Wisconsin",
  "Alabama",
  "New York",
  "Vermont",
  "Indiana",
  "Massachussets",
  "Ohio",
  "Virginia",
  "West Virginia",
  "Pennsylvania",
  "North Dakota",
  "South Dakota",
  "Oregon",
  "California",
  "Nevada",
  "Arizona",
  "New Mexico",
  "Florida",
  "Louisiana",
  "Texas",
  "New Hampshire",
  "Maine",
  "Rhode Island",
  "Alaska",
  "Connecticut",
  "Montana",
  "Nebraska",
  "Delaware",
  "Washington",
  "Iowa",
  "Kansas",
  "Oklahoma",
  "Michigan",
  "Minnesotta",
  "Kentucky",
  "Tennessee",
  "Idaho",
  "Utah",
  "Georgia",
  "Mississippi",
  "Missouri",
  "Colorado",
  "Delaware",
  "Hawaii",
  "Maryland",
  "North Carolina",
  "South Carolina",
  "New Jersey",
  "Wyoming",
];

/* 
	? .forEach
	* a loop
	* takes your iterator, index, and original iterable array
	* fires a callback function for every single iteration
		* callback fx - a function that runs each time
	* forEach does NOT return anything
*/

let forEachResult = states.forEach((value, index, origArray) => {
  console.log(`Iterable: ${value} - Index: ${index}`);
  // console.log(origArray)
  return "forcing it to return something";
});

console.log(forEachResult);

/* 
	? Challenge
	* create a new array
	* utilize forEach on the states
	* if the state starts with a letter M, add it to the new array
*/

let mStates = [];

states.forEach((i) => {
  if (i[0] === "M") {
    mStates.push(i);
  }
});

console.log(mStates);

let grades = [56, 25, 100, 98, 77, 3, 103];

/* 
	? Challenge
	* utilize forEach on grades
	* check if a value is divisible by 2
	* if it is, add it to a new divByTwo array
	
	* run another forEach
	* round up everyone's grade by 10 points (tricky!!)
	* if someone's grade is over 90, do nothing
*/

let divByTwo = [];
console.log(divByTwo);
grades.forEach(function (val) {
  if (val % 2 === 0) {
    divByTwo.push(val);
    console.log(divByTwo);
  }
});

function handleGrades(val, index, origArr) {
  if (val < 90) {
    origArr[index] = val + 10;
  }
}

// ? Callback functions need to be passed by reference (no parents at the end() )
grades.forEach(handleGrades);

console.log(grades);

/* 
	* .map()
	* same as forEach except one crucial difference
	* creates a new array with elements returned from the callback fx
	* tl;dr it returns stuff
	! returns for every instance of an iterable
*/

let statesWithI = states.map((s) => s.toUpperCase());

console.log(statesWithI);

console.log(
  grades.map((i) => {
    if (i < 90) {
      return i + 10;
    } else {
      return i;
    }
  }),
);

console.log(
  grades.map((i) => {
    if (i < 90) {
      return i + 10;
    }
    // ? Early Return Example (Guard Clauses)
    // if condition is true, we will leave the function
    return i;
  }),
);

let ternaryExample = grades.map((i) => (i < 90 ? i + 10 : i));
console.log(ternaryExample);

// ? Challenge Solution

const students = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
  "Fiona Green",
];

let usernames = students.map((s) => {
  return `@${s.toLowerCase().replace(" ", "_")}`;
});

console.log(usernames);

let usernames2 = students.map((s) => {
  let name = "@";
  for (i of s.toLowerCase()) {
    if (i !== " ") {
      name += i;
    }

    if (i === " ") {
      name += "_";
    }
  }
  return name;
});

console.log(usernames2);

/*
 * .filter()
 * creates a new array from returned values
 * only runs on filtered iterables
 * "which meet the predicate" - condition
 * this means it cannot have if/else
 */

let startsWithI = states.filter((s) => s.startsWith("I"));

console.log(startsWithI);

/* 
	? Challenge
	* given our array of grades
	* find passing scores using filter method
	* passing should be 60 and above
*/

console.log(grades);

let passingGrades = grades.filter((g) => g >= 60);
console.log(passingGrades);

/*
 * .reduce()
 * adds a reducer callback
 * returns a value
 * can hold value of the prior element
 * think like a summation keeping track
 * stores initial value as an accumulator
 */

let total = 0;

for (i of grades) {
  total += i;
}
console.log(total);

let totalGrades = grades.reduce((sum, grade) => {
  return sum + grade;
}, 0);

/* 
	syntax

	arr.reduce((prevValue, currValue, index, arr) => {
		}, initialValue)

	* prevValue otherwise known as an accumulator
*/

console.log(totalGrades);
