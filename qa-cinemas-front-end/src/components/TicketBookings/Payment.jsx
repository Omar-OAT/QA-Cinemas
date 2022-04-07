import { useState } from "react";
import axios from "axios";
import { Card, CardBody, Input, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";


const Payment = ({ trigger, time, price }) => {

  const { filmName } = useParams();
  const { date } = useParams();

  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expDate, setExpDate] = useState();
  const [securityCode, setSecurityCode] = useState();
  const [bookingReference, setBookingReference] = useState();

  const create = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4494/payment/create`, {
        cardName,
        cardNumber,
        expDate,
        securityCode,
        bookingReference
      })
      .then((res) => {
        clearValues();
        console.log(res);
      })
  };

  const clearValues = () => {
    setCardName("");
    setCardNumber("");
    setExpDate("");
    setSecurityCode("");
    setBookingReference("");
  };

  return (
    <> <br />
      <h2>Confirm and Pay for {filmName}</h2>
      <Card>
        <CardBody>
          <form onSubmit={create}>
            Name on card<Input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            Card number<Input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Row>
              <Col></Col>
              <Col></Col>
              <Col >
                Expiry date<Input
                  style={{ width: "280px" }}
                  type="text"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                />
              </Col>
              <Col>
                Security Code<Input
                style={{width: "280px"}}
                  type="text"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            Booking Reference: <Input
              type="text"
              value={bookingReference}
              onChange={(e) => setBookingReference(e.target.value)}
            /> <br />
            <button type="submit" className="btn btn-success">
              Pay
            </button>
          </form>
        </CardBody>
      </Card>
    </>
  );
}

export default Payment;