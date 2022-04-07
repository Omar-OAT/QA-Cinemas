import { useEffect, useState } from 'react';
import axios from "axios";
import SearchList from './SearchList';
import SearchField from './SearchField';


const SearchFilms = () => {
    
    const [data, setData] = useState([]);
    const [searchVal, setSearch] = useState('');

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchVal}&api_key=995409c42d06b580a0ab9bf8836ebc7f`)
            .then((response) => {
                
                console.log(response.data); //just to see what the data looks like
                if (Array.isArray(response.data.results)) {  // If the response is of type array
                    console.log("type of running");
                    
                    setData(response.data.results)
                } else {
                    setData([response.data.results]); // put my response into an array
                }
            })
    }, [searchVal])

  
    
        return (
            <>
            <div>
               <SearchField searchVal={searchVal} setSearch={setSearch}/>
            </div>
            <div>
        <SearchList data = {data}/>
        </div>
        </>
  );
    
};

export default SearchFilms;
