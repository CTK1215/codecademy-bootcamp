// import express and invoke its router interface
const router = require("express").Router();
const countries = require("../models/countries");
const validateCountry = require("../helpers/validateCountry");

/*
	? GET /countries/all
	* returns the whole array
	! this MUST sit above GET /:country
	* otherwise "all" gets swallowed as the value of :country
*/
router.get("/all", (req, res) => {
  res.status(200).json({
    count: countries.length,
    countries,
  });
});

/*
	? POST /countries/new
	* body holds the new country
	* the helper checks the required fields so this route stays short
	* the id comes from the server, never from the client
*/
router.post("/new", (req, res) => {
  let missing = validateCountry(req.body);

  if (missing.length > 0) {
    return res.status(400).json({
      message: "Missing required fields",
      missing,
    });
  }

  let { name, capital, currency, gdp, population } = req.body;

  let newCountry = {
    id: countries.length > 0 ? countries[countries.length - 1].id + 1 : 1,
    name,
    capital,
    currency,
    gdp,
    population,
  };

  countries.push(newCountry);

  res.status(201).json({
    message: `${name} added`,
    country: newCountry,
  });
});

/*
	? GET /countries/:country
	* dynamic route, the value after /countries/ lands in req.params.country
	* matched against the name, case-insensitive, so /countries/japan works
*/
router.get("/:country", (req, res) => {
  let { country } = req.params;

  let found = countries.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  );

  if (!found) {
    return res.status(404).json({
      message: `${country} not found`,
    });
  }

  res.status(200).json(found);
});

/*
	? PUT /countries/:id
	* params come in as strings, so the id is converted before comparing
	* PUT replaces the whole record, so every required field has to be present
	* the id is kept from the URL, the client cannot change it
*/
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  let index = countries.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: `Country with id ${id} not found`,
    });
  }

  let missing = validateCountry(req.body);

  if (missing.length > 0) {
    return res.status(400).json({
      message: "Missing required fields",
      missing,
    });
  }

  let { name, capital, currency, gdp, population } = req.body;

  countries[index] = { id, name, capital, currency, gdp, population };

  res.status(200).json({
    message: `${name} updated`,
    country: countries[index],
  });
});

/*
	? DELETE /countries/:id
	* find the index, splice it out, send back what was removed
*/
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  let index = countries.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: `Country with id ${id} not found`,
    });
  }

  let [removed] = countries.splice(index, 1);

  res.status(200).json({
    message: `${removed.name} deleted`,
    country: removed,
  });
});

// exports all modified content of the object to access elsewhere
module.exports = router;
