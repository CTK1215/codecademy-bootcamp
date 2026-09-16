require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// import our exports
const routes = require("./controllers/routes");
const timestamp = require("./helpers/timestamp");

// this middleware json-ifies our incoming requests to get the body
app.use(express.json());
// Handlers for our middleware
app.use(timestamp);
app.use(routes);
app.use("/securityissue", express.static(`${__dirname}/public`));

/* 
	? .env and dotenv
	* .env is a hidden file keeping track of all your secrets
	* loaded at runtime
	* secrets are not hardcoded within your application
	* to use:
		* install with npm i dotenv
		* add require("dotenv").config() to top of app.js
		* use process.env to access
*/

app.listen(PORT, HOST, () => {
  console.log(`[server] listening on ${HOST}:${PORT}`);
});

/* 
	? Model View Controller Architecture (MVC)
	* a way to architect your application
	* handles full-stack apps
	* breaks full stack application into three categories:
		* model (data)
		* view (client) browser, curl, Postman
		* controller (business logic)
	* MVC is used for Separation of Concerns
	
	? Separation of Concerns
	* enables maintainability
	* helps group and find specific modules, services, etc.
	* requires the use of design patterns
*/
