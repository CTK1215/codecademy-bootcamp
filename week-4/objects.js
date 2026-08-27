/* 
	? Objects
	* reference data type
	* denoted by { }
	* unlike array, no indexes
	* has keys or properties
	* properties are denoted by . (ex: .length)
	* has methods denoted by () (ex: toUpperCase())
	* has .this keyword
	* used for when data has to be recalled by some name
*/

// Object literal

let obj = {};
console.log(Boolean(obj), obj, obj.length);
// empty is truthy; has no length

let bentley = {
  // property: value
  // key: value pairs
  species: "dog",
  color: "black and white",
  name: "Bentley",
  spayedNeutered: true,
  breed: "olde english bulldoggee",
  weight: 78,
  favoriteActivity: ["farting", "fetching", "sleeping"],
};

console.log(bentley);

// ? Accessing object properties

// using dot notation and array notation
console.log(bentley.breed, bentley["breed"]);

// not indexable
console.log(bentley[0]);

// ? Assigning property

bentley.owner = "Paul";
console.log(bentley);

// ? Reassining property

bentley.color = "spotted";
console.log(bentley);

// ? We can convert object into an array (kinda)

let objProperties = Object.keys(bentley);
console.log(objProperties);

let objValues = Object.values(bentley);
console.log(objValues);

let favoriteActivityValuesIfExist = Object.keys(bentley);

favoriteActivityValuesIfExist.forEach((i) => {
  if (i === "favoriteActivity") {
    console.log(bentley[i]);
  }
});

// ? Challenge - what's the length of Bentley object?

console.log(Object.keys(bentley).length);

let request = {
  email: "paul@codecademy.com",
  password: "dbLocal",
};

let db = [
  { email: "paul@codecademy.com", password: "dbLocal." },
  { email: "chris@gmail.com", password: "coolStuff123" },
  { email: "shreya@ceo.com", password: "iLikeCoolSTuff" },
];

// ? How would I list all emails in my database?

db.forEach((i) => console.log(i.email));

/* 
	? Challenge
	* create an authentication service
	* it should take an incoming request and parse it
	* it should then check if the individual exists
	* if they don't, console log user not found
	* if they do exist, check if their password matches
	* if it doesn't, console log invalid password
	* if it does, console log user logged in
	
	! SPICEY MODE
	* handle malformed request (what if email or password is missing?)
	* what if someone types in Paul@codecademy.com
	* how would you ensure successful username search?
*/

let authService = (req, database) => {
  console.log(req);
  console.log(database);

  console.log(req.email);

  let foundUser = database.filter((u) => u.email === req.email);
  console.log(foundUser);

  if (foundUser.length) {
    if (foundUser[0].password === req.password) {
      console.log("user logged in");
    } else {
      console.log("invalid password");
    }
  }
};

authService(request, db);

// ? Auth Service But More Elegant

function searchUser(req, db) {
  return db.filter((u) => req.email === u.email);
}

function validatePassword(requestPassword, dbPwd) {
  if (requestPassword === dbPwd) {
    return { success: true, message: "User Logged In" };
  }

  return { success: false, message: "Invalid Password" };
}

function render(obj) {
  if (obj.success) {
    return "Logged In";
  }

  return "Invalid Password";
}

function newAuthService(req, db) {
  let foundUser = searchUser(req, db);

  if (foundUser.length) {
    let result = validatePassword(req.password, foundUser[0].password);

    return render(result);
  }
}

console.log(newAuthService(request, db));


let startsWithC = states.filter((s) => s.startsWith("C"));
console.log(startsWithC);

let grades = [100, 90, 95, 87, 59, 61, 75, 55, 89, 81];
let passingGrades = grades.filter((g) => g >= 60);
console.log(passingGrades);

let users = [
  { email: "paul@codecademy.com", password: "abc123" },
  { email: "sarah@codecademy.com", password: "hunter2" },
  { email: "chris@codecademy.com", password: "coolguy123" },
];

function authenticate(request) {
  let match = users.find((u) => u.email === request.email);

  if (!match) {
    console.log("user not found");
    return;
  }
  if (match.password !== request.password) {
    console.log("invalid password");
    return;
  }
  console.log("user logged in");
}

authenticate({ email: "paul@codecademy.com", password: "abc123" });
authenticate({ email: "paul@codecademy.com", password: "wrong" });
authenticate({ email: "nobody@codecademy.com", password: "abc123" });
  