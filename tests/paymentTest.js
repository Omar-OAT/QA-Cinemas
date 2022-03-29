const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../server");
const { Payment } = require("../config/db");

describe("Test Payment", () => {
  let testPayment;

  beforeEach((done) => {
    Payment.deleteMany((err) => {
      if (!err) {
        Payment.create(
          {
            cardName: "J K Aspinall",
            cardNumber: "2345-1234-7654-1642",
            expDate: "04/26",
            securityCode: "290",
            bookingReference: "174638276",
          },
          (error, created) => {
            if (!error) {
              testPayment = created;
            }
            return done();
          }
        );
      }
    });
  });

  it("Should create a Payment", (done) => {
    chai
      .request(server)
      .post("/payment/create")
      .send({
        cardName: "T W White",
        cardNumber: "7563-3435-1562-5623",
        expDate: "09/26",
        securityCode: "093",
        bookingReference: "3846753",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty(
          "text",
          "Successfully created a payment"
        );
        return done();
      });
  });

  it("Should not create a Payment", (done) => {
    chai
      .request(server)
      .post("/payment/create")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.haveOwnProperty(
          "text",
          "Payment validation failed: bookingReference: Path `bookingReference` is required., securityCode: Path `securityCode` is required., expDate: Path `expDate` is required., cardNumber: Path `cardNumber` is required., cardName: Path `cardName` is required."
        );
        return done();
      });
  });

  it("Should find a Payment", (done) => {
    chai
      .request(server)
      .get("/payment/get/" + testPayment.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("cardName", "J K Aspinall");
        expect(res.body).to.haveOwnProperty(
          "cardNumber",
          "2345-1234-7654-1642"
        );
        expect(res.body).to.haveOwnProperty("expDate", "04/26");
        expect(res.body).to.haveOwnProperty("securityCode", "290");
        expect(res.body).to.haveOwnProperty("bookingReference", "174638276");
        return done();
      });
  });

  it("Should delete a Payment", (done) => {
    chai
      .request(server)
      .delete("/payment/remove/" + testPayment.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        return done();
      });
  });

  it("Should get all Payment", (done) => {
    chai
      .request(server)
      .get("/payment/getAll")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("array");
        expect(res.body).length(1);
        return done();
      });
  });

  it("Should update a Payment", (done) => {
    chai
      .request(server)
      .put("/payment/replace/" + testPayment.id)
      .send({
        cardName: "K D Cunningham",
        cardNumber: "2321-3454-6734-6743",
        expDate: "02/26",
        securityCode: "398",
        bookingReference: "2365438",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(202);
        expect(res.body).to.haveOwnProperty("cardName", "J K Aspinall");
        expect(res.body).to.haveOwnProperty(
          "cardNumber",
          "2345-1234-7654-1642"
        );
        expect(res.body).to.haveOwnProperty("expDate", "04/26");
        expect(res.body).to.haveOwnProperty("securityCode", "290");
        expect(res.body).to.haveOwnProperty("bookingReference", "174638276");
        return done();
      });
  });
});
