import { useParams } from "react-router-dom";
import FilmManager from "./FilmManager";

const FilmBooking = () => {
    const {id} = useParams();
    return ( 
        <div> <br /><br />
            <h2>Book film - {id}</h2>
            <FilmManager data={id}/>
        </div>
     );
}
 
export default FilmBooking;