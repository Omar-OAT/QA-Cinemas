"use strict";
const mongoose = require(`mongoose`);

const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  movie: { type: String, required: true },
  movieDate: { type: String, required: true },
  movieTime: { type: String, require: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  adultTickets: { type: Number, required: true },
  childTickets: { type: Number, required: true },
  concessionTickets: { type: Number, requried: true },
  price: { type: Number, required: true },
  paid: { type: Boolean, required: true },
});

const discussionSchema = new Schema({
  movie: { type: String, required: true },
  movieRating: { type: String, required: true },
  movieComment: { type: String },
});

const paymentSchema = new Schema({
  cardName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expDate: { type: String, required: true },
  securityCode: { type: String, required: true },
  bookingReference: { type: String, required: true },
});

const Booking = model("Booking", bookingSchema);
const Discussion = model("Discussion", discussionSchema);
const Payment = model("Payment", paymentSchema);

mongoose.connect(
  "mongodb://localhost:27017/QACinemas",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully connected to database");
    }
  }
);

module.exports = { Booking, Discussion, Payment };
