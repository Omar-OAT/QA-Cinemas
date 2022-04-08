const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../server");
const { Discussion } = require("../config/db");

describe("Test Discussion", () => {
  let testDiscussion;

  beforeEach((done) => {
    Discussion.deleteMany((err) => {
      if (!err) {
        Discussion.create(
          {
            movie: "Star Wars",
            movieRating: "9",
            movieComment: "Great Movie!",
          },
          (error, created) => {
            if (!error) {
              testDiscussion = created;
            }
            return done();
          }
        );
      }
    });
  });

  it("Should create a Discussion", (done) => {
    chai
      .request(server)
      .post("/discussion/create")
      .send({
        movie: "Rio",
        movieRating: "7",
        movieComment: "Decent Movie!",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty(
          "text",
          "Successfully created a discussion"
        );
        return done();
      });
  });

  it("Should not create a Discussion", (done) => {
    chai
      .request(server)
      .post("/discussion/create")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.haveOwnProperty(
          "text",
          "Discussion validation failed: movieRating: Path `movieRating` is required., movie: Path `movie` is required."
        );
        return done();
      });
  });

  it("Should find a Discussion", (done) => {
    chai
      .request(server)
      .get("/discussion/get/" + testDiscussion.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("movie", "Star Wars");
        expect(res.body).to.haveOwnProperty("movieRating", "9");
        expect(res.body).to.haveOwnProperty("movieComment", "Great Movie!");
        return done();
      });
  });

  it("Should delete a Discussion", (done) => {
    chai
      .request(server)
      .delete("/discussion/remove/" + testDiscussion.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        return done();
      });
  });

  it("Should get all Discussions", (done) => {
    chai
      .request(server)
      .get("/discussion/getAll")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("array");
        expect(res.body).length(1);
        return done();
      });
  });

  it("Should update a Discussion", (done) => {
    chai
      .request(server)
      .put("/discussion/replace/" + testDiscussion.id)
      .send({
        movie: "Cinderella",
        movieRating: "8",
        movieComment: "Movie was amazing!",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(202);
        expect(res).to.haveOwnProperty(
          "text",
          "Successfully updated comment with Id:" + testDiscussion.id
        );
        return done();
      });
  });
});
