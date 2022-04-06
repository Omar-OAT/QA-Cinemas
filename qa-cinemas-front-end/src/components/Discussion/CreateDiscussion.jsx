import { Card, CardBody, CardTitle, Input } from "reactstrap";
import { useState } from "react";
import axios from "axios";

const CreateDiscussion = ({ trigger, login }) => {
  const [movie, setMovie] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieComment, setMovieComment] = useState("");

  const create = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4494/discussion/create`, {
        movie,
        movieRating,
        movieComment,
      })
      .then((res) => {
        clearValues();
        trigger(res.data);
      })
      .catch((err) => {
        trigger(err.data);
      });
  };

  const clearValues = () => {
    setMovie("");
    setMovieRating("");
    setMovieComment("");
  };

  return (
    <div className="bg-dark" id="sidebar">
      <Card inverse color="dark">
        <CardBody>
          <CardTitle>Discuss the Movie!</CardTitle>
          <form onSubmit={create}>
            <Input
              type="text"
              className="form-control"
              placeholder="Movie Name"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              placeholder="Rating out of 10"
              value={movieRating}
              onChange={(e) => setMovieRating(e.target.value)}
            />
            <Input
              type="textarea"
              className="form-control"
              placeholder="Movie Comments"
              value={movieComment}
              onChange={(e) => setMovieComment(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CreateDiscussion;
