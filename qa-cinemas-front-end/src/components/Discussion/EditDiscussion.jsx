import axios from "axios";
import { useState } from "react";
import {
  CardLink,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "reactstrap";

const EditDiscussion = ({ item, trigger, loginStatus }) => {
  const { movie, movieRating, movieComment } = item;
  const [updateMovie, setUpdateMovie] = useState(movie);
  const [updateMovieRating, setUpdateMovieRating] = useState(movieRating);
  const [updateMovieComment, setUpdateMovieComment] = useState(movieComment);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const refreashPage = () => {
    window.location.reload();
  };

  const updateDatabase = (e) => {
    if (loginStatus === 1) {
      e.preventDefault();
      axios
        .put(
          `http://localhost:4494/discussion/replace/${item._id}?movie=${updateMovie}&movieRating=${updateMovieRating}&movieComment=${updateMovieComment}`,
          {
            movie: updateMovie,
            movieRating: updateMovieRating,
            movieComment: updateMovieComment,
          }
        )
        .then((res) => {
          trigger(res.data);
          toggle();
        })
        .catch((err) => {
          trigger(err.data);
        });
    } else {
      trigger("You are not logged in!");
    }
  };

  return (
    <>
      <CardLink className="btn btn-outline-warning" onClick={toggle}>
        EDIT
      </CardLink>
      <Modal isOpen={modal}>
        <ModalHeader>{item.movie}</ModalHeader>
        <form>
          <ModalBody>
            <input
              type="text"
              className="form-control"
              value={updateMovie}
              onChange={(e) => setUpdateMovie(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={updateMovieRating}
              onChange={(e) => setUpdateMovieRating(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={updateMovieComment}
              onChange={(e) => setUpdateMovieComment(e.target.value)}
            />
          </ModalBody>
        </form>
        <ModalFooter>
          <button
            type="submit"
            onClick={updateDatabase}
            className="btn btn-outline-success"
          >
            Update
          </button>
          <button
            onClick={() => {
              toggle();
              refreashPage();
            }}
            className="btn btn-outline-danger"
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditDiscussion;
