import React from "react";
import { Card, CardImg, CardBody, CardText, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const SearchList = (props) => {
  return (
    <>
      <Container fluid>
        <Row md={3}>
          {props.data.map((movie) => (
            <div>
              <Card
                border="danger"
                body
                outline
                color="secondary"
                inverse
                style={{
                  backgroundColor: "#333",
                  borderColor: "#333",
                  width: "20rem",
                  display: "inline-block",
                }}
              >
                <CardImg
                  alt={movie.original_title}
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <CardBody>
               
                  <CardText>
                    <Link to={`/film/${movie.id}`}>Film page</Link>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchList;
