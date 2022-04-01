import NavBar from "./components/NavBar";

import "./resources/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import OpeningTimes from "./components/OpeningTimes/OpeningTimes";
import WhereTo from "./components/WhereToFindUs/WhereTo";
import Places from "./components/Places/Places";
import AboutUs from "./components/AboutUs/AboutUs";
import Screens from "./components/Screens/Screens";
import ContactUs from "./components/ContactUs/ContactUs";
import ListingsGallery from "./components/Films/ListingsGallery";
import FilmOverview from "./components/Films/FilmOverview";
import NewReleases from "./components/Films/NewReleases";
import { Carousel } from "reactstrap";
import CarouselMovies from "./components/carousel";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
      }}
    >
      <Router>
        <div>
        <NavBar/>
        </div>
        <div className="mbody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listingsgallery" element={<ListingsGallery/>} />
          <Route path="/openingtimes" element={<OpeningTimes />} />
          <Route path="/film/:data.id" element={<FilmOverview/>}/>
          <Route path="/gettingthere" element={<WhereTo />} />
          <Route path="/places" element={<Places />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/newreleases" element={<CarouselMovies/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
