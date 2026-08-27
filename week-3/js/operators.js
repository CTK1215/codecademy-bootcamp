/* 
	? Operators
	* addition +
	* substraction -
	* division /
	* exponents **
	* dot .
	* modulo %
	* assignment =
	* comparison ==
	* strict comparison ==
*/

/* 
	? Expressions
	* unprocessed values grouped using the ()
	* evaluated to be truthy or falsey
	* can be empty ()
	
	* expressions evaluate
*/

console.log(2 + 2)

let exponentSample = 2**5
console.log(exponentSample)

// ? Modulo - remainder of long division
let divisionResult = 10/2
console.log(divisionResult)
let remainderResult = 10 % 2
console.log(remainderResult)
let remainderResult2 = 10 % 3
console.log(remainderResult2)

/* 
	? Assignment Comparison & Strict Comparison
	* used to assign or resolve expression of 2+ variables
*/

console.log(2 == 2) // return true
console.log(2 == "2") // returns true

/* 
	? Type Coercion
	* if it walks like a duck and quacks like a duck...
	* JS takes number 2 and turns it into a string "2"
	* compares again and voila, we're in for PAIN!
	* is there a way to avoid this?!
	* YES! strict comparison operator
	* ===
*/

console.log(2 === "2") // returns false value matches but not type

// Causes some interesting problems
console.log(2 + "2") // 2 gets type coerced into "2" and gets concatenated
console.log(true + 2)
console.log("some string" + true)
console.log("potato" + undefined)
console.log(2 + undefined)