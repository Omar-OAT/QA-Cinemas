import NavBar from "./components/NavBar";

import "./resources/App.css";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Films from "./components/Films";
import OpeningTimes from "./components/OpeningTimes";
import WhereTo from "./components/WhereTo";
import Places from "./components/Places";
import AboutUs from "./components/AboutUs";
import Screens from "./components/Screens";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Footer/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/films" element={<Films/>}/>
          <Route path = "/openingtimes" element={<OpeningTimes/>}/>
          <Route path = "/whereto" element={<WhereTo/>}/>
          <Route path = "/places" element={<Places/>}/>
          <Route path = "/aboutus" element={<AboutUs/>}/>
          <Route path = "/screens" element={<Screens/>}/>
          <Route path = "/contactus" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
