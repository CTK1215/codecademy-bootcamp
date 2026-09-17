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

// mounting with a prefix, so router.post("/login") in auth.js answers at /auth/login
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
