import { useEffect, useState } from 'react';
import axios from "axios";
import BookForm from '../TicketBookings/BookForm';
import { Figure, Container, Row, Col, Badge } from 'react-bootstrap';

const FilmManager = ({ data }) => {

    const [filmData, setfilmData] = useState([]);

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data); //see what the data looks like
                if (Array.isArray(response.data)) {  // If the response is of type array
                    console.log("type of running");
                    setfilmData(response.data)
                } else {
                    setfilmData([response.data]); // put my response into an array
                }
            })
    }, [])


    return (
        <div className="film">
            {
                filmData.map((profile) => {
                    return <>
                        <Container>
                            <Row>
                                <Col><Figure.Image
                                    width={300}
                                    height={180}
                                    alt="171x180"
                                    src={"https://image.tmdb.org/t/p/w500" + profile.poster_path}
                                /></Col>
                                <Col><Figure.Caption>
                                    <h2> {profile.original_title}</h2>
                                    <h4>{profile.tagline}</h4> <br />
                                    <h4>{profile.overview}</h4>
                                </Figure.Caption></Col>
                                <Col><h3>Release Date</h3>
                                    <h4>{profile.release_date}</h4>
                                    <h6>Genres <br />{profile.genres.map((genre, key) => { return <Badge bg="secondary">{genre.name}</Badge> })}</h6>
                                </Col>
                            </Row>
                        </Container>
                                            
                    </>
                })}
                
        </div>
    );
}

export default FilmManager;