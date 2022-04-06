import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import EditDiscussion from "./EditDiscussion";
import DeleteDiscussion from "./RemoveDiscussion";

const IndividualDiscussion = ({ item, trigger, loginStatus, loginFunc }) => {
  return (
    <>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h2 className="text-black">Movie Name: {item.movie}</h2>
          </CardTitle>
          <CardSubtitle>
            <h2 className="text-black">Movie Rating: {item.movieRating}</h2>
          </CardSubtitle>
          <CardText className="text-black">
            Movie Comment: {item.movieComment}
          </CardText>
          <div className="float-right">
            <DeleteDiscussion
              del={item._id}
              trigger={trigger}
              loginStatus={loginStatus}
              loginFunc={loginFunc}
            />
            <EditDiscussion
              item={item}
              trigger={trigger}
              loginStatus={loginStatus}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default IndividualDiscussion;
