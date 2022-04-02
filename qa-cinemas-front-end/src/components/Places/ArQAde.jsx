import { renderMatches } from "react-router-dom";
import places2eat from "../images/Place2eat.jpg";

import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const ArQAde = () => {
  useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="play">
     <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <img class="rounded-circle img-fluid" src="02.jpg" />
              </div>
            </div>
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <h2 class="display-4">For those who love to game!</h2>
              <p>
                Got some time to kill? or perhaps so hi-scores at our brand new arcade for those times where your just not ready to go home
                <br />
              </p>
              <h2>ArQAde</h2>
              <p class="font-italic">
               
                3rd floor
              </p>
              <p></p>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
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

export default ArQAde;
