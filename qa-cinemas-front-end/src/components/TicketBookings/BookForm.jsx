import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
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

const BookForm = ({
  showForm,
  setShowForm,
  setBookingReference,
  bookingReference,
}) => {
  const [movie, setmovie] = useState(null);
  const [movieDate, setMovieDate] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [concessionTickets, setConcessionTickets] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [price, setPrice] = useState(0);

  const book = (event) => {
    create(event);
    setShowForm(false);
    setShowConfirmation(true);
  };

  const bookAndPay = (event) => {
    create(event);
    console.log("bookAndPay");
  };

  const create = (event) => {
    event.preventDefault();
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

  return <h1></h1>;
};

export default BookForm;
