import { useState } from "react";
import CreateDiscussion from "./CreateDiscussion";
import ReadAllDiscussion from "./ReadAllDiscussions.";

const Discussion = () => {
  const [msg, setMsg] = useState("");

  const trigger = (data) => {
    setMsg(data);
  };

  return (
    <>
      <div className="jumbotron d-flex align-items-center">
        <div className="container">
          <h1 className="text-white">Discussion Board</h1>
          <p className="text-white">
            Have your say on your favourite films using the box below
          </p>
        </div>
      </div>
      {/* <h1>Welcome to the discussion board</h1> */}
      <div className="row" align="center">
        <div className="col-md-2">
          <CreateDiscussion trigger={trigger} />
          <br />
        </div>
        <div className="container">
          <div className="col-md-10">
            <div className="alert alert-success">{msg}</div>
            <ReadAllDiscussion msg={msg} trigger={trigger} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
