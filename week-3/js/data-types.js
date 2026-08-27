/* 
	? JS Data Types:
	* Primitive
		* string
		* number
		* boolean
		* null
		* undefined
		* Not a Number (NaN)
	* Reference
		* array
		* object
		* Map
		* Set
	
	! JS does not enforce data type definition. This causes type coercion issues.
*/

/* 
	? Strings
	* represents characters
	* enclosed '', "", `` (backticks under your esc key)
*/

console.log("This is a text")
console.log('This is also a text')
console.log(`So is this`)

// ? How do we connect separate strings ?

let firstName = "Chris"
let state = "California"

console.log(firstName, state)
// above are just mulitple arguments in a method

// ? String Concatenation (adding of strings)
let nameState = firstName + state
console.log(nameState)

// ? A number can be represented as a string
let currentYear = "2026"
console.log(currentYear)
// ! this is a string representation of a number data type

// Checking for data type
console.log(typeof currentYear) // resolves to string

// ? Strings are indexed starting from zero, accessed using [index]
let pdk = "Porschedoppelkupplungsgetriebe"
console.log(pdk[5])

// ? We can get a length of a string as well

console.log(pdk.length) // this is example of a property

console.log(pdk[30]) // index out of bounds error (off by one error)

console.log(pdk.toUpperCase()) // example of a method

// ? Strings are immutable

let leastFavoriteState = "Indiana"
leastFavoriteState[0] = "P"
console.log(leastFavoriteState)
leastFavoriteState = "Pndiana"
console.log(leastFavoriteState)

// ? String Interpolation - a better way to piece strings together
/* 
	* starts with backticks ``
	* 
*/
let strInterpolatedState = `${firstName} ${state}`
let strConcatenatedSample = firstName + " " + state
console.log(strInterpolatedState, strConcatenatedSample)

/* 
	? Challenge
	* create a variable fullName with your name
	* create a variable street with street name
	* create a variable with state, city, etc with a value
	* finally interpolate them all together as finalAddress string
	! extra challenge - can you print each line on a new line in the console?
*/

/* let fullName = "Paul Niemczyk"
let street = "123 Main St"
let stateZIP = "Traverse City, MI"
let finalAddress = `${fullName} \n ${street} \n ${stateZIP}`
console.log(finalAddress)

/* 
	? Numbers
	* any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(typeof 200)

/* 
	? Boolean
	* binary value
	* true (on) or false (off)
	* 0 & 1
	* Falsey Values
		* 0
		* undefined
		* null
		* NaN
		* ""
*/

console.log(true, false)
console.log(Boolean(0), Boolean(1))
console.log(Boolean(null), Boolean(undefined), Boolean(NaN))
console.log(Boolean(""), Boolean(" "))


const fullName = "Chris";
const streetName = "Chinook";
const cityName = "Beaumont";
const stateName = "California";

const finalAddress = `${fullName} \n${streetName} \n${cityName} \n${stateName}`

console.log(finalAddress)

