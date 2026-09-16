// import express and invoke its router interface
const router = require("express").Router();
const users = require("../models/users");

/*
	? POST /auth/register
	* body holds { email, password }
	* both are required, and an email can only register once
	* 201 Created on success, and the password never goes back out in the response
	! passwords are stored as plain text for now, hashing comes later in the course
*/
router.post("/register", (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "email and password are required",
    });
  }

  let exists = users.find((user) => user.email === email);

  if (exists) {
    return res.status(409).json({
      message: `${email} is already registered`,
    });
  }

  let newUser = {
    id: users.length + 1,
    email,
    password,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered",
    user: { id: newUser.id, email: newUser.email },
  });
});

/*
	? POST /auth/login
	* body holds { email, password }
	* look the user up by email, then check the password
	* 401 Unauthorized when either one is wrong (same message for both, so we do not leak which)
*/
router.post("/login", (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "email and password are required",
    });
  }

  let user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  res.status(200).json({
    message: `Welcome back, ${user.email}`,
    user: { id: user.id, email: user.email },
  });
});

// exports all modified content of the object to access elsewhere
module.exports = router;
