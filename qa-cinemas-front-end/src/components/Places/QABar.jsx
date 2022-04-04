import places2eat from "../images/Place2eat.jpg";

import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const QABar = () => {
  useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="eat">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5 ">
              <img
                class="rounded-circle img-fluid border border-light"
                src={places2eat}
                alt="resteraunt"
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">For those who love to eat</h2>
              <p>
                Come down to our on-site resteruant, where you and your family
                can come to eat before and after enjoying a movie.
                <br />
              </p>
              <h2>QArbonated Culinaries</h2>
              <p class="font-italic">
                Serves Alcohol
                <br />
                Vegan options available
                <br />
                Childrens meals
                <br />
              </p>
              <p>Open everyday from 14:00-23:00</p>
              <Button variant="primary" onClick={handleShow}>
                Address and offers
              </Button>
              <div>
                <Modal show={show} onHide={handleClose} centered size="lg"  >
                  <Modal.Header closeButton>
                    <Modal.Title>Contact details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                   
                      <Row >
                        <Col>name</Col>
                        <Col>phone</Col>
                        <Col>email</Col>
                        <Col>address</Col>
                        <Col>country</Col>
                      </Row>
                      <Row>
                        <Col> QArbonated Culinaries </Col>
                        <Col> 0800 1111 </Col>
                        <Col>QArBarnation@icloud.co.uk</Col>
                        <Col>Ap #280-5154 Fringilla. Road</Col>
                        <Col>United Kingdom</Col>
                      </Row>
                      <br/>
                    <p>Show your ticket at entry to recieve a free smoothie or 10% off any 1 meal and drink.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QABar;
