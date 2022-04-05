import { useEffect, useState } from 'react';
import axios from "axios";
import Film from '../Films/Film';

const TicketBookings = () => {

  const [data, setData] = useState([]);

  const [filmId, setFilmId] = useState("");

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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
    <div> <br />
      <h1>Book with us today</h1>
      Select Film: 
      <div className="drop-down">
            <select value={filmId} onChange={(e) => {setFilmId(e.target.value)} }>
                { data.map((option, key) => <option key={key} >{option.id}</option>) }
            </select>
              <Film data={filmId}/>
            </div>;
      
      </div>
  )
};

export default TicketBookings;
