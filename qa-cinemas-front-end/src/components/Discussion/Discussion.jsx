import { useState } from "react";
import CreateDiscussion from "./CreateDiscussion";
import ReadAllDiscussion from "./ReadAllDiscussions.";
import LoginDiscussion from "./LoginDiscussion";

const Discussion = () => {
  const [msg, setMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);

  const trigger = (data) => {
    setMsg(data);
  };

  const loginFunc = () => {
    setLoginStatus(1);
    console.log(loginStatus);
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
          <LoginDiscussion
            trigger={trigger}
            loginFunc={loginFunc}
            loginStatus={loginStatus}
          />
          <br />
          <CreateDiscussion trigger={trigger} />
        </div>
        <div className="container">
          <div className="col-md-10">
            <div className="alert alert-success">{msg}</div>
            <ReadAllDiscussion
              msg={msg}
              trigger={trigger}
              loginFunc={loginFunc}
              loginStatus={loginStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
