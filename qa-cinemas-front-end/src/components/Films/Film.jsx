const Film = (props) => {    

    const {title, plot, image, releaseDate} = props;
    
    return (
    <div className="film">
        <h2>{title}</h2>
        <p>Plot:</p>
        <h4>{plot}</h4>
        {image}
        {/* <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.original_title} width="280px" /> */}
        <p>Release date: {releaseDate}</p>
    </div>
    );
}

export default Film;
