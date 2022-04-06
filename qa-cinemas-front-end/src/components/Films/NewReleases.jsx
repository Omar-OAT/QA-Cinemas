import { useEffect, useState } from "react";
import axios from "axios";
import Releases from "./Releases";
import { Container, Row } from "reactstrap";

const NewReleases = () => {
  //state for the data we are loading in
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results); //just to see what the data looks like
        if (Array.isArray(response.data.results)) {
          // If the response is of type array
          console.log("type of running");
          setData(response.data.results);
        } else {
          setData([response.data.results]); // put my response into an array
        }
      });
  }, []);

  return (
    <>
      <br />
      <h2>New Releases</h2>
      <div>
        <Container fluid>
          <Row md={3}>
            {data.map((listing, key) => {
              return <Releases data={listing} key={key} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewReleases;
