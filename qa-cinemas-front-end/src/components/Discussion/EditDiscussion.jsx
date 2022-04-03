import axios from "axios";
import { useState } from "react";
import {
  CardLink,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "reactstrap";

const EditDiscussion = ({ item, trigger }) => {
  const { movie, movieRating, movieComment } = item;
  const [updateMovie, setUpdateMovie] = useState(movie);
  const [updateMovieRating, setUpdateMovieRating] = useState(movieRating);
  const [updateMovieComment, setUpdateMovieComment] = useState(movieComment);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const updateDatabase = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4494/discussion/replace/${item._id}`, {
        movie: updateMovie,
        rating: updateMovieRating,
        comment: updateMovieComment,
      })
      .then((res) => {
        trigger(res.data);
        toggle();
      })
      .catch((err) => {
        trigger(err.data);
      });
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
          <button onClick={toggle} className="btn btn-outline-danger">
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditDiscussion;
