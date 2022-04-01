import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, CarouselItem } from "react-bootstrap";
import { CarouselCaption } from "reactstrap";
//import image1 from './images/pup1.jpg';
//import image2 from './images/pup2.jpg';
//import image3 from './images/pup3.jpg';

const api_key = "995409c42d06b580a0ab9bf8836ebc7f";
const movie_url = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
const CarouselMovies = () => {
  const [data = [{}], setData] = useState([]);
  const api = axios.create({ baseURL: movie_url });
  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);
  //   const movies=movieData.map((data,id))
  return (
   
      <>
      <td>
          {data.map((movie, id) => {
            return (
              <div key={id}>
                <Carousel>
                  <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={getImage(movie.poster_path)}
                  alt={movie.original_title}
                />
                </Carousel.Item>
                <CarouselCaption>
                  <p>test</p>
                </CarouselCaption>
                </Carousel>
                
              </div>
            )
          })}
      </td>
      </>
  );
};

export default CarouselMovies;
