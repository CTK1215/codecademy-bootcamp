// import express and invoke its router interface
const router = require("express").Router();
const countries = require("../models/countries");
const validateCountry = require("../helpers/validateCountry");
const { badRequest, notFound } = require("../helpers/errorHandlers");

// ! /all MUST sit above /:country, or "all" gets read as a country name
router.get("/all", (req, res) => {
  res.status(200).json({
    count: countries.length,
    countries,
  });
});

router.post("/new", (req, res) => {
  let missing = validateCountry(req.body);

  if (missing.length > 0) {
    return badRequest(res, "Missing required fields", { missing });
  }

  let { name, capital, currency, gdp, population } = req.body;

  // the id comes from the server, never from the client
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

router.get("/:country", (req, res) => {
  let { country } = req.params;

  // case-insensitive, so /countries/japan works
  let found = countries.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  );

  if (!found) {
    return notFound(res, `${country} not found`);
  }

  res.status(200).json(found);
});

router.put("/:id", (req, res) => {
  // params come in as strings, so convert before comparing
  let id = Number(req.params.id);
  let index = countries.findIndex((c) => c.id === id);

  if (index === -1) {
    return notFound(res, `Country with id ${id} not found`);
  }

  // PUT replaces the whole record, so every field has to be present
  let missing = validateCountry(req.body);

  if (missing.length > 0) {
    return badRequest(res, "Missing required fields", { missing });
  }

  let { name, capital, currency, gdp, population } = req.body;

  // the id is kept from the URL, the client cannot change it
  countries[index] = { id, name, capital, currency, gdp, population };

  res.status(200).json({
    message: `${name} updated`,
    country: countries[index],
  });
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  let index = countries.findIndex((c) => c.id === id);

  if (index === -1) {
    return notFound(res, `Country with id ${id} not found`);
  }

  let [removed] = countries.splice(index, 1);

  res.status(200).json({
    message: `${removed.name} deleted`,
    country: removed,
  });
});

// exports all modified content of the object to access elsewhere
module.exports = router;
