import { useEffect, useState } from 'react';
import axios from "axios";
import Listing from './Listing';
import { Container, Row } from "reactstrap";

const ListingsGallery = () => {
    //state for the data we are loading in
    const [data, setData] = useState([]);


    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=995409c42d06b580a0ab9bf8836ebc7f&language=en-US&page=1`)
            .then((response) => {
                console.log(response.data.results); //just to see what the data looks like
                if (Array.isArray(response.data.results)) {  // If the response is of type array
                    console.log("type of running");
                    setData(response.data.results)
                } else {
                    setData([response.data.results]); // put my response into an array
                }
            })
    }, [])

    return (
        <>
            <h2>Currently Showing</h2>
            <div>
                <Container fluid>
                <Row md={3}>
                    {data.map((listing, key) => {
                        return <Listing data={listing} key={key} />
                    })}
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default ListingsGallery;