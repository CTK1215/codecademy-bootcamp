/* 
	? Scope & Hoisting

	* Scope
	* determines how information in different code blocks gets accessed
	* five scopes
		* global/window
		* block
		* function
		* module
		* lexical
	
	* Hoisting
	* JS is parsed top to bottom left to right
	* JS interpreter runs the code twice
		* first, it hoists VARiables and function declarations into memory
		* then it executes, calls, and so on
	
	! DO NOT USE !!!! or Paul will come for you :P
*/

/* 
	? Global
	* outermost scope
	* our .js file
*/

let globalScopeVariable = "This is an example of a global scope";
console.log(globalScopeVariable);

/* 
	? Function Scope
	* available inside of a function only
*/

function fxScope() {
  let functionScopeVariable = "This is a function scope";
  console.log(functionScopeVariable);
  // can access global scope variable inside of a function
  console.log(globalScopeVariable);
}

fxScope();
// console.log(functionScopeVariable) // ReferenceError cannot access fx scope in global scope

// ? HINT ? scope is accessible from inside out, but not from outside in

/* 
	? Block Scope
	* anywhere there are { }
	* can be function, loop, conditional, class, etc.
*/

{
  {
    {
      {
        let blockScopeVariable = "This is a block scope variable";
        console.log(blockScopeVariable);
        // console.log(someOuterBlockScopeVariable) // ReferenceError
      }
    }
    console.log(globalScopeVariable);
    // console.log(blockScopeVariable) // ReferenceError
    let someOuterBlockScopeVariable = "This is some outer block scope variable";
  }
}

/* 
	? Lexical Scope
	* variables can be accessed in the nested position
	* inner fx scope can access outer fx scope
*/

function outerFx() {
  let outerFunction = "Outer function scope";

  function innerFx() {
    let innerFunction = "Inner function scope";
    console.log(innerFunction);
    console.log(outerFunction);
  }

  innerFx();
}

console.log(outerFx());

/* 
	? Module Scope
	* encapsulates objects nested inside files or modules
	* helps keep the app DRY
*/

// require imports file from the module object
const addNums = require("./addNums");

console.log(addNums(5, 7));
console.log(addNums(20, 7));

for (let i = 0; i < 10; i++) {
  console.log(addNums(5, i));
}

console.log("--------- HOISTING ---------");

// console.log(myName) // ReferenceError doesn't exist yet
let myName;

console.log(address);
var address = "123 Main St";

/*
 * interpreter runs and hoists all var and fx declarations into memory
 * it assigns them default values as it hasn't read actual values yet
 */

console.log(someFunction());
function someFunction() {
  return "some function";
}

// console.log(fxExpression()) // ReferenceError
// ? function expressions are NOT hoisted
let fxExpression = function () {
  return "this is a fx expression example";
};

function run() {
  var foo = "foo";
  let bar = "bar";
  console.log(foo, bar);
  {
    var moo = "moo";
    let baz = "baz";
    console.log(moo, baz);
    console.log(foo, bar);
  }
  // console.log(baz) // Reference Error - going up a scope
  console.log(moo);
}

/*
 * ln 141 works
 * var not only gets hoisted
 * it gets scoped to the immediate FUNCTION body, not block body
 * all else gets scoped to the immediate BLOCK body
 */

run();

{
  var test = "ldsakjflskd";
}

console.log(test);

// why does above work?! we're not in function body...

// ? global scope is actually a function
