// import express and invoke its router interface
const router = require("express").Router();
const users = require("../models/users");
const { badRequest, unauthorized, conflict } = require("../helpers/errorHandlers");

// ! passwords are stored as plain text for now, hashing comes later in the course
router.post("/register", (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return badRequest(res, "email and password are required");
  }

  let exists = users.find((user) => user.email === email);

  if (exists) {
    return conflict(res, `${email} is already registered`);
  }

  let newUser = {
    id: users.length + 1,
    email,
    password,
  };

  users.push(newUser);

  // the password never goes back out in the response
  res.status(201).json({
    message: "User registered",
    user: { id: newUser.id, email: newUser.email },
  });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return badRequest(res, "email and password are required");
  }

  let user = users.find((user) => user.email === email);

  // same message for a bad email and a bad password, so we do not leak which
  if (!user || user.password !== password) {
    return unauthorized(res);
  }

  res.status(200).json({
    message: `Welcome back, ${user.email}`,
    user: { id: user.id, email: user.email },
  });
});

// exports all modified content of the object to access elsewhere
module.exports = router;
