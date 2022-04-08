import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "reactstrap";
import image1 from "../images/cinemafood.jpg";
import image2 from "../images/cinemascreen.jpg";
import image3 from "../images/cinemaseat.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    caption: "Super Tasty Food",
  },
  {
    src: image2,
    altText: "Slide 2",
    caption: "Massive iMAX Screens",
  },
  {
    src: image3,
    altText: "Slide 3",
    caption: "Luxury Leather Reclining Seating",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="600px" />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="mbody">
      <br />
      <Container>
        <h1 className="text-white text-center display-1">QA Cinemas</h1>
      </Container>
      <br />
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <br />
      <h5 className="text-white text-center">
        Welcome to QA cinemas! Feel free to use navigation bar across the top to
        traverse through our site. You can see what is currenly showing via
        Gallery, to see all our current and future listings. After finding your
        movie, go to the Ticket Booking page to get yourself and others booked
        in and pay for the tickets. There is also information about our current
        opening times, getting here, film classifications and screen layouts.
        Search for your favourite films on our Search page and exclusive
        discounts on our Places To Go page.
      </h5>
      <br></br>
      <h3 className="text-white text-center">
        Please give us a review via email which can be found on our Contact Us
        page!
      </h3>
    </div>
  );
};
export default Home;
