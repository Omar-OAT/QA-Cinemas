import React from "react";
import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const SearchList = (props) => {
    return ( <>
    
    {props.data.map((movie, index) => <div>
        
        <Card border="danger" body outline color="secondary" body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '20rem', display: "inline-block" }}
      >
        <CardImg
          alt={movie.original_title}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        />
        <CardBody>
          {/* <CardTitle tag="h5">
            {data.original_title}
          </CardTitle> */}
          <CardText>
          
                    <Link to={`/film/${movie.id}`}>
                    Book Now
                    </Link>
          
            </CardText>
            </CardBody>
            </Card>
    </div>)}
    
    </> );
}
 
export default SearchList;