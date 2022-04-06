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
  Container,
} from "reactstrap";

const BookForm = (
  showForm,
  setShowForm,
  data,
  setBookingReference,
  bookingReference
) => {
  const [movie, setMovie] = useState(null);
  const [movieDate, setMovieDate] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [concessionTickets, setConcessionTickets] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filmData, setfilmData] = useState([]);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [price, setPrice] = useState(0);

  const book = (e) => {
    create(e);
    setShowForm(false);
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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data); //see what the data looks like
        if (Array.isArray(response.data)) {
          // If the response is of type array
          console.log("type of running");
          setfilmData(response.data);
        } else {
          setfilmData([response.data]); // put my response into an array
        }
      });
  }, []);

  useEffect(() => {
    setPrice(adultTickets * 10 + childTickets * 8 + concessionTickets * 8);
  }, [adultTickets, childTickets, concessionTickets]);

  return (
    <div className="film">
      {filmData.map((profile, key) => {
        return (
          <>
            <h2> {profile.original_title}</h2>
          </>
        );
      })}
    </div>
  );
};

export default BookForm;
