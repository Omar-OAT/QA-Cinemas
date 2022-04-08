import { useParams } from "react-router-dom";
import SearchManager from "./SearchManager";

const MovieDetailsSearch = () => {
    const {id} = useParams();
    return ( 
        <div> <br /><br />
            <h2>Book film - {id}</h2>
            <SearchManager data={id}/>
        </div>
     );
}
 
export default MovieDetailsSearch;