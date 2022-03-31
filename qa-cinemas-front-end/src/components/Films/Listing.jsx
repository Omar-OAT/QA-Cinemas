import {
  Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle
} from "reactstrap";

const Listing = ({ data }) => {


  return (
    <div class="container">
      <Card style={{ width: '20rem', display: "inline-block" }}
      >
        <CardImg
          alt={data.original_title}
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
        />
        <CardBody>
          <CardTitle tag="h5">
            {data.original_title}
          </CardTitle>
           <CardText>
            {data.overview} <br />
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'http://localhost:3000/film/' + data.id;
              }}
            > See more details or book</Button>
          </CardText>
        </CardBody>
      </Card>
      <br />
      <br />
    </div>
  );
}

export default Listing;