function timestamp(req, res, next) {
  res.date = new Date().toLocaleTimeString();
  console.log(res.date, req.method, req.originalUrl);
  // next() - allows us to continue down the call stack
  next();
}

module.exports = timestamp;
