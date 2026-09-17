const REQUIRED_FIELDS = ["name", "capital", "currency", "gdp", "population"];

// returns the names of any missing fields, so an empty array means valid
function validateCountry(body) {
  let missing = [];

  for (let field of REQUIRED_FIELDS) {
    if (body[field] === undefined || body[field] === "") {
      missing.push(field);
    }
  }

  return missing;
}

module.exports = validateCountry;
