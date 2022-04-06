import { useEffect, useState } from 'react';
import axios from "axios";
import Film from './Film';

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
                filmData.map((profile, key) => {
                    return <>
                    <h2> {profile.original_title}</h2>
                    <h4>{profile.overview}</h4>
                    </>
                })}
    </div>
    );
}

export default FilmManager;
