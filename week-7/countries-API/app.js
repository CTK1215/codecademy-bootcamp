require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// import our exports
const auth = require("./controllers/auth");
const routes = require("./controllers/routes");
const timestamp = require("./helpers/timestamp");

// this middleware json-ifies our incoming requests to get the body
app.use(express.json());
// log every request before it reaches a router
app.use(timestamp);

/*
	? Mounting routers on a subroute
	* app.use("/auth", auth) means every route inside auth.js
	* is prepended with /auth, so router.post("/login") answers at /auth/login
	* keeps the two routers from fighting over the same paths
	* and is the "prepend a subroute" workaround from the routes lesson
*/
app.use("/auth", auth);
app.use("/countries", routes);

// anything that made it past both routers has no matching route
app.use((req, res) => {
  res.status(404).json({
    message: `No route for ${req.method} ${req.originalUrl}`,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`[server] listening on ${HOST}:${PORT}`);
});

/*
	? Project layout (MVC + helpers)
	* models/       the data (in-memory arrays for now, a database later)
	* controllers/  the business logic, one router per concern
	* helpers/      small reusable functions the controllers lean on
	* the view is whatever client hits the server: Postman, curl, a browser
*/
