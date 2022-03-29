const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const errors = require("http-errors");

const app = express();

app.use(cors());
app.use(parser.json());

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date());
  return next();
});

const bookingRoutes = require("./routes/bookingRoutes");
const discussionRoutes = require("./routes/discussionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use("/booking", bookingRoutes);
app.use("/discussion", discussionRoutes);
app.use("/payment", paymentRoutes);

app.use("*", (req, res, next) => next({ status: 404, message: "Invalid URL" }));

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  console.log("Server has successfully started on port", server.address().port);
});

module.exports = server;
