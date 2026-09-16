/*
	? Model
	* the data layer of MVC
	* for now it is an in-memory array, so it resets every time the server restarts
	* later in the course this becomes a database
	* gdp is in billions of US dollars, population is a head count (approximate 2023 figures)
*/

let countries = [
  {
    id: 1,
    name: "United States",
    capital: "Washington, D.C.",
    currency: "USD",
    gdp: 27360,
    population: 335000000,
  },
  {
    id: 2,
    name: "Japan",
    capital: "Tokyo",
    currency: "JPY",
    gdp: 4210,
    population: 124000000,
  },
  {
    id: 3,
    name: "Germany",
    capital: "Berlin",
    currency: "EUR",
    gdp: 4460,
    population: 84000000,
  },
  {
    id: 4,
    name: "Brazil",
    capital: "Brasilia",
    currency: "BRL",
    gdp: 2170,
    population: 216000000,
  },
  {
    id: 5,
    name: "Mexico",
    capital: "Mexico City",
    currency: "MXN",
    gdp: 1790,
    population: 129000000,
  },
];

module.exports = countries;
