const SearchField = (props) => {
    return (  
        <div>

            <input className="form-control" value={props.value} 
            onChange={(event) => props.setSearch(event.target.value)} placeholder="enter a movie title!"></input>

        </div>

    );
}
 
export default SearchField;