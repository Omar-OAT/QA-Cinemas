import axios from "axios";
import { CardLink } from "reactstrap";

const DeleteDiscussion = ({ del, trigger, loginStatus }) => {
  const remove = () => {
    if (loginStatus === 1) {
      axios
        .delete(`http://localhost:4494/discussion/remove/${del}`)
        .then((res) => {
          trigger("Deleted comment with id: " + del);
        })
        .catch((err) => {
          trigger("Error in deleting");
        });
    } else {
      trigger("You are not logged in!");
    }
  };

  return (
    <>
      <CardLink className="btn btn-outline-danger" onClick={remove}>
        DELETE
      </CardLink>
    </>
  );
};

export default DeleteDiscussion;
