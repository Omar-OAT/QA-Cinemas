import axios from "axios";
import { useState, useEffect } from "react";
import {
  Alert,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const BookForm = ({ setBookingReference, bookingReference, data }) => {
  const [movie, setMovie] = useState("");
  const [movieDate, setMovieDate] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [concessionTickets, setConcessionTickets] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [price, setPrice] = useState(0);

  const book = (e) => {
    create(e);
    setShowConfirmation(true);
  };

  const bookAndPay = (e) => {
    create(e);
    console.log("bookAndPay");
  };

  const create = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4494/booking/create`, {
        movie,
        movieDate,
        movieTime,
        firstName,
        lastName,
        email,
        adultTickets,
        childTickets,
        concessionTickets,
        price,
        paid: false,
      })
      .then((res) => {
        setBookingReference(res.data._id);
        console.log("booking reference:" + bookingReference);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setPrice(adultTickets * 8 + childTickets * 6 + concessionTickets * 5);
  }, [adultTickets, childTickets, concessionTickets]);

  return (
    <>
      <Card className="noHoverCard">
        <CardBody>
          <h2 className="text-black">Book Here!</h2>
          <Form>
            <FormGroup align="center">
              <Label>Movie Title:</Label>
              <h5 value={movie}>{data}</h5>
            </FormGroup>
            <FormGroup align="center">
              <Label for="Date">Movie Date:</Label>
              <Input
                style={{ width: "500px", border: "solid black" }}
                type="date"
                name="date"
                value={movieDate}
                onChange={({ target }) => setMovieDate(target.value)}
              ></Input>
            </FormGroup>
            <FormGroup align="center">
              <Label for="chooseTime">Movie Time:</Label>
              <Input
                style={{
                  width: "500px",
                  border: "solid black",
                }}
                type="select"
                value={movieTime}
                onChange={({ target }) => setMovieTime(target.value)}
              >
                <option>10:00</option>
                <option>12:00</option>
                <option>15:00</option>
                <option>18:00</option>
                <option>21:00</option>
              </Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>First Name:</Label>
              <Input
                style={{ width: "500px", border: "solid black" }}
                type="text"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              ></Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>Last Name:</Label>
              <Input
                style={{ width: "500px", border: "solid black" }}
                type="text"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              ></Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>Email:</Label>
              <Input
                style={{ width: "500px", border: "solid black" }}
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              ></Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>Adult Tickets:</Label>
              <Input
                style={{
                  width: "500px",
                  border: "solid black",
                }}
                type="select"
                value={adultTickets}
                onChange={({ target }) => setAdultTickets(target.value)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>Child Tickets:</Label>
              <Input
                style={{
                  width: "500px",
                  border: "solid black",
                }}
                type="select"
                value={childTickets}
                onChange={({ target }) => setChildTickets(target.value)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <FormGroup align="center">
              <Label>Concession Tickets:</Label>
              <Input
                style={{
                  width: "500px",
                  border: "solid black",
                }}
                type="select"
                value={concessionTickets}
                onChange={({ target }) => setConcessionTickets(target.value)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <br />
            <FormGroup align="center">
              <h5>Booking Cost: £{price}</h5>
            </FormGroup>
            <br />
            <Row>
              <Col></Col>
              <Col xs="3">
                <Button onClick={book}>Book Now and Pay Later!</Button>
              </Col>
              <Col xs="3">
                <Button onClick={bookAndPay}>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white"
                    to="/payment"
                  >
                    Book and Pay Now!
                  </Link>
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );

  if (showConfirmation) {
    console.log("Alert " + bookingReference);
    return (
      <div>
        <Alert color="success">
          Booking Confirmed! Please make a note of your booking reference:{" "}
          {bookingReference}
        </Alert>
      </div>
    );
  } else {
    return <></>;
  }
};

export default BookForm;
