import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import IndividualDiscussion from "./IndividualDiscussion";

const ReadAllDiscussion = ({ msg, trigger, loginStatus, loginFunc }) => {
  const [movieCommentList, setMovieCommentList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4494/discussion/getAll`)
      .then((res) => {
        setIsLoaded(true);
        setMovieCommentList(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err.message);
      });
  }, [msg]);

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded) {
    return <Spinner animation="border" role="status" />;
  } else {
    return (
      <div className="row">
        {movieCommentList.map((item) => (
          <div className="col-md-12">
            <IndividualDiscussion
              key={item.id}
              item={item}
              trigger={trigger}
              loginStatus={loginStatus}
              loginFunc={loginFunc}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default ReadAllDiscussion;
