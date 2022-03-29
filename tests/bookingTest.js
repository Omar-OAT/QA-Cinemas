const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../server");
const { Booking } = require("../config/db");

describe("Test Booking", () => {
  let testBooking;

  beforeEach((done) => {
    Booking.deleteMany((err) => {
      if (!err) {
        Booking.create(
          {
            movie: "Spiderman",
            movieDate: "2022-03-29T00:00:00.000Z",
            movieTime: "11AM",
            firstName: "Jessica",
            lastName: "Johnson",
            email: "JessicaJ@hotmail.com",
            adultTickets: 2,
            childTickets: 1,
            concessionTickets: 1,
            price: 15,
            paid: true,
          },
          (error, created) => {
            if (!error) {
              testBooking = created;
            }
            return done();
          }
        );
      }
    });
  });

  it("Should create a Booking", (done) => {
    chai
      .request(server)
      .post("/booking/create")
      .send({
        movie: "Batman",
        movieDate: "2022-03-31T00:00:00.000Z",
        movieTime: "10AM",
        firstName: "Jake",
        lastName: "Brown",
        email: "JakeB@hotmail.com",
        adultTickets: 4,
        childTickets: 0,
        concessionTickets: 0,
        price: 20,
        paid: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty(
          "text",
          "Successfully created a booking"
        );
        return done();
      });
  });

  it("Should not create a Booking", (done) => {
    chai
      .request(server)
      .post("/booking/create")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.haveOwnProperty(
          "text",
          "Booking validation failed: paid: Path `paid` is required., price: Path `price` is required., childTickets: Path `childTickets` is required., adultTickets: Path `adultTickets` is required., email: Path `email` is required., lastName: Path `lastName` is required., firstName: Path `firstName` is required., movieDate: Path `movieDate` is required., movie: Path `movie` is required."
        );
        return done();
      });
  });

  it("Should find a Booking", (done) => {
    chai
      .request(server)
      .get("/booking/get/" + testBooking.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("movie", "Spiderman");
        expect(res.body).to.haveOwnProperty(
          "movieDate",
          "2022-03-29T00:00:00.000Z"
        );
        expect(res.body).to.haveOwnProperty("movieTime", "11AM");
        expect(res.body).to.haveOwnProperty("firstName", "Jessica");
        expect(res.body).to.haveOwnProperty("lastName", "Johnson");
        expect(res.body).to.haveOwnProperty("email", "JessicaJ@hotmail.com");
        expect(res.body).to.haveOwnProperty("adultTickets", 2);
        expect(res.body).to.haveOwnProperty("childTickets", 1);
        expect(res.body).to.haveOwnProperty("concessionTickets", 1);
        expect(res.body).to.haveOwnProperty("price", 15);
        expect(res.body).to.haveOwnProperty("paid", true);
        return done();
      });
  });

  it("Should delete a Booking", (done) => {
    chai
      .request(server)
      .delete("/booking/remove/" + testBooking.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        return done();
      });
  });

  it("Should get all Booking", (done) => {
    chai
      .request(server)
      .get("/booking/getAll")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("array");
        expect(res.body).length(1);
        return done();
      });
  });

  it("Should update a Booking", (done) => {
    chai
      .request(server)
      .put("/booking/replace/" + testBooking.id)
      .send({
        movie: "Superman",
        movieDate: "2022-04-02T00:00:00.000Z",
        movieTime: "12PM",
        firstName: "Tyson",
        lastName: "James",
        email: "TysonJ@hotmail.com",
        adultTickets: 3,
        childTickets: 2,
        concessionTickets: 0,
        price: 24,
        paid: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(202);
        expect(res.body).to.haveOwnProperty("movie", "Spiderman");
        expect(res.body).to.haveOwnProperty(
          "movieDate",
          "2022-03-29T00:00:00.000Z"
        );
        expect(res.body).to.haveOwnProperty("movieTime", "11AM");
        expect(res.body).to.haveOwnProperty("firstName", "Jessica");
        expect(res.body).to.haveOwnProperty("lastName", "Johnson");
        expect(res.body).to.haveOwnProperty("email", "JessicaJ@hotmail.com");
        expect(res.body).to.haveOwnProperty("adultTickets", 2);
        expect(res.body).to.haveOwnProperty("childTickets", 1);
        expect(res.body).to.haveOwnProperty("concessionTickets", 1);
        expect(res.body).to.haveOwnProperty("price", 15);
        expect(res.body).to.haveOwnProperty("paid", true);
        return done();
      });
  });
});
