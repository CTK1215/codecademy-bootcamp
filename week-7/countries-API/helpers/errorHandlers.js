// one function per status code, each returns the response
// so a route can write `return notFound(res, "...")` and stop there

function badRequest(res, message, extra = {}) {
  return res.status(400).json({ message, ...extra });
}

function unauthorized(res, message = "Invalid email or password") {
  return res.status(401).json({ message });
}

function notFound(res, message) {
  return res.status(404).json({ message });
}

function conflict(res, message) {
  return res.status(409).json({ message });
}

module.exports = { badRequest, unauthorized, notFound, conflict };
