
import BARQADE from "../images/BARQADE.jpg";

import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const QABarOnly = () => {
  useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="eat">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="rounded-circle img-fluid border border-primary"
                src={BARQADE}
                alt="BarQADE"
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">For those who love a beverage!</h2>
              <p>
                Cocktails and Mocktails, here you can get whatever you like with our wide selection and with our new light up floor
                everywhere you step is a party, the catch? You get to enjoy a space that is for adults only.
                <br />
              </p>
              <h2>The Qlub</h2>
              <p class="font-italic">No children allowed</p>
              <p>Open only on Fri-Sun 17:00-01:00</p>
              <Button variant="primary" onClick={handleShow}>
              Contact details
              </Button>
              <div>
                <Modal show={show} onHide={handleClose} centered size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Contact details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>name</Col>
                      <Col>phone</Col>
                      <Col>email</Col>
                      <Col>address</Col>
                      <Col>country</Col>
                    </Row>
                    <Row>
                      <Col> Paragon</Col>
                      <Col> 0161 9393 </Col>
                      <Col>ParaGon@BarQAde.co.uk</Col>
                      <Col>123 newtown road</Col>
                      <Col>United Kingdom</Col>
                    </Row>
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

export default QABarOnly;
