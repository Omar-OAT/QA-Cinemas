import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


const Listing = ({ data }) => {
  useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <Card border="danger" body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '20rem', display: "inline-block" }}
      >
        <CardImg
          alt={data.original_title}
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
        />
        <CardBody>
          <CardText>
            <Button variant="primary" onClick={handleShow}>
              Quick View
            </Button>
            <span>
              <Modal show={show} onHide={handleClose} centered size="lg" >
                <Modal.Header closeButton> <br />
                  <Modal.Title>{data.original_title}</Modal.Title>
                </Modal.Header>
                <img
                  alt={data.original_title}
                  src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
                />
                <Modal.Body >
                  {data.overview} <br /> <br />
                  Release date: {data.release_date}
                </Modal.Body>
                <Modal.Footer >
                  <Button variant="secondary" onClick={handleClose}>
                    <Link to={`/film/${data.id}`}>
                    More details
                    </Link>
                  </Button>
                </Modal.Footer>
              </Modal>
            </span>
          </CardText>
        </CardBody>
      </Card>
      <br />
      <br />
    </div>
  );


}



export default Listing;

