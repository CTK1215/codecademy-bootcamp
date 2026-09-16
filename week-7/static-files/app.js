const express = require("express");
const app = express();
const PORT = 4000;
const HOST = "127.0.0.1";

/* 
	? Server Side Rendering (SSR)
	* a server is responsible for serving static content
	* can be done using express static middleware
*/

// Determine a path to our static content
// __dirname resolves absolute path from our project
console.log(`${__dirname}/public/index.html`);

let public = `${__dirname}/public`;

// .use() middleware resolver uses express' static middleware to serve an entire folder
app.use("/", express.static(public));

app.get("/resume", (req, res) => {
  // allows for sending a single file at a time
  res.sendFile(`${public}/resume.pdf`);
});

app.listen(PORT, HOST, () => {
  console.log(`[server] listening on ${HOST}:${PORT}`);
});

/* 
	? Challenge
	* the / route has a form
	* make the form send a request to /success endpoint
	* the /success endpoint should render the following:
	* "Thank you for your email, we will respond in one business day"
	* The text above should be a a page, just some HTML text
	! EXTRA SPICEY
	* what if I wanted the page to say "Thank you {email}... where the email gets filled from the earlier form?"
*/
