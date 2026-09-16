/*
	? Validation helper
	* every country needs the same fields
	* checking them in one place means POST and PUT cannot drift apart
	* returns an array of the field names that are missing (empty array = valid)
*/

const REQUIRED_FIELDS = ["name", "capital", "currency", "gdp", "population"];

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
