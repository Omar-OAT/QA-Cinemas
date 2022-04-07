import { useParams } from "react-router-dom";
import FilmManager from "./FilmManager";

const FilmBooking = () => {
    const {id} = useParams();
    return ( 
        <div> <br /><br />
            <p>Film ID {id}</p>
            <FilmManager data={id}/>
            
        </div>
     );
}
 
export default FilmBooking;