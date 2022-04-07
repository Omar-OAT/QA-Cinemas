import { useState } from "react";
import CreateDiscussion from "./CreateDiscussion";
import ReadAllDiscussion from "./ReadAllDiscussions.";
import LoginDiscussion from "./LoginDiscussion";
import './DiscussionStyle.css'

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
          <h3>QA Cinemas</h3>
          <h1 className="text-whitee">Discussion Board</h1>
          <div className="line">
                    <div />
                    <div />
                    <div />
                </div>
                <br />
          <p className="text-white">
            Have your say on your favourite films using the box below
          </p>
        </div>
      </div>
      {/* <h1>Welcome to the discussion board</h1> */}
      <div className="row" align="center">
        <div>
          <LoginDiscussion
            trigger={trigger}
            loginFunc={loginFunc}
            loginStatus={loginStatus}
          />
          <br />
          <CreateDiscussion trigger={trigger} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
