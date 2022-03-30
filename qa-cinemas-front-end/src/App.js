import NavBar from "./components/NavBar";

import "./resources/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import OpeningTimes from "./components/OpeningTimes/OpeningTimes";
import WhereTo from "./components/WhereToFindUs/WhereTo";
import Places from "./components/Places/Places";
import AboutUs from "./components/AboutUs/AboutUs";
import Screens from "./components/Screens/Screens";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/openingtimes" element={<OpeningTimes />} />
          <Route path="/whereto" element={<WhereTo />} />
          <Route path="/places" element={<Places />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
