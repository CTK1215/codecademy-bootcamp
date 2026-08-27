/* 
	? Classes
	* part of Object Oriented Programming Paradigm (OOP)
		* has APIE
		* abstraction
		* polymorphism
		* encpasulation
		* inheritance
	* templates which build objects for us
*/

class Student {
  // method used to create and initialize an object
  constructor(name, cohort, year, country) {
    this.name = name;
    this.cohort = cohort;
    this.year = year;
    this.country = country;
    this.bestInstructor = "Paul";
  }

  // ? Abstraction - it just works
  modifyProperty(key, newValue) {
    this[key] = newValue;
  }
}

// ? Polymorphism - same same but different
// utilize new keyword to create an INSTANCE of this class
let paul = new Student();
console.log(paul);

let dave = new Student("Dave", "fullstack-11", 2026, "USA");
console.log(dave);

// ? Inheritance Example - we inherit the same method across different instances
paul.modifyProperty("cohort", "fullstack-11");
dave.modifyProperty("name", "David");
console.log(paul, dave);

// ? Encapsulation Example - we cannot access it outside of scope
// console.log(cohort) // ReferenceError
