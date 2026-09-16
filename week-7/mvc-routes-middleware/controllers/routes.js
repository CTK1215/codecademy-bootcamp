/* 
	? Router
	* an object handling routing and middleware only
	* helps with scope pollution (access to all methods when not needed)
	
	? Basic Routing
	* router.method() handles request type (GET, POST, PATCH, PUT, DELETE, etc.)
	* endpoint
	* callback with business logic and req/res as parameters
	* response is then sent
*/

// import express and invoke its router interface
const router = require("express").Router();

/* 
	? GET request
	* has header and the endpoint
*/
router.get("/health", (req, res) => {
  res.status(200).json({
    message: "The server is up and running",
  });
});

/* 
	? POST request
	* comes with a body
	* body holds a payload
*/

router.post("/", (req, res) => {
  console.log(req.body);

  let name = req.body.name;

  res.status(200).json({
    message: `You hit the POST route, ${name}`,
  });
});

/* 
	? We can have the same route but different methods
*/

// ? Quick Challenge: don't hardcode method in message. Where could you get its name?

router.put("/", (req, res) => {
  res.status(200).json({
    message: `You hit the ${req.method} route`,
  });
});

router.delete("/", (req, res) => {
  res.status(200).json({
    message: `You hit the ${req.method} route`,
  });
});

/* 
	? Query Params
	! not to be mistaken with params
	* just like the query params on the client side
	* we can pass key value pairs into our server
	* great for filtering data
*/

router.get("/filter", (req, res) => {
  console.log(req.query);

  /* 
		? Object Destructuring
		* a way to extract properties from an object
		* saves us repeating ourselves
	*/

  // let name = req.query.name
  // let age = req.query.age
  // let email = req.query.email

  let { name, age, email } = req.query;
  console.log(name, age, email);

  res.status(201).json({
    message: "Created user",
    user: { name, age, email },
  });
});

router.get("/weather", (req, res) => {
  console.log(req.query);

  let { country, city, temp } = req.query;
  console.log(country, city, temp);

  res.status(201).json({
    message: "Weather values",
    weather: { country, city, temp },
  });
});

/* 
	? Params
	* a dynamic route
	* parameters within an object
	* server-side, they will us to dynamically inject a value
	* business logic retrieves data based on param value
	* denoted by /:key (colon)
	* value is accessed using request.params
*/

router.get("/:id", (req, res) => {
  // ? id becomes a variable in the world of endpoints
  console.log("This is your params objects", req.params);
  console.log("This is your params object value", req.params.id);

  // Object destructuring
  let { id } = req.params;
  console.log(id);

  res.status(200).json({
    message: `Reached ${req.method} route`,
    id,
  });
});

// ! WARNING this route will never be reached
router.get("/:user", (req, res) => {
  // just a "/" endpoint
  // anything after : becomes a variable
  console.log("User endpoint reached");
});

// ? A workaround by prepending a subroute (github)
router.get("/github/:username/:repo", (req, res) => {
  console.log(req.params);
});

// exports all modified content of the object to access elsewhere
module.exports = router;

/* 
	? Challenge
	* Economics of Countries API
	* build an MVC + helpers express server
	* install all dependencies
	* create auth.js and routes.js files in the controllers
	* ensure you have your .env configured
	* tl;dr shell of a project
	* build the following routes:
		* /register and /login (under auth)
		* under routes
			* GET /all countries
			* POST /new country
			* GET /:country to get one country
			* PUT /:id to update a country
			* DELETE /:id to delete a country
	! test every route in postman
*/
