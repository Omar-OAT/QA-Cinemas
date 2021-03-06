import pic1 from "../images/StandardSeating.png";
import pic2 from "../images/StandardScreen.png.jpg";
import pic3 from "../images/DirectorsSeating.png.png";
import pic4 from "../images/DirectorsScreen.png.jpg";

const Screens = () => {
  return (
    <div>
      <br />
      <h2> Screen Display and Layouts </h2>

      <p className="text-white">
        {" "}
        Find yourself feeling extremely comfortable in our very stylish standard
        screens with the whole family!
      </p>
      <img src={pic1} alt="StandardSeating" height="50%" width="60%"></img>
      <br></br>
      <br />
      <p className="text-white">
        {" "}
        The seating plan will allow you to best choose the seat which will
        provide you with most comfort and best view of the main screen{" "}
      </p>
      <br />
      <img src={pic2} alt="StandardScreen" height="50%" width="60%"></img>
      <br></br>
      <br />
      <p className="text-white">
        {" "}
        Enhance your experience by viewing any new release in our Directors
        Screen! Provided with luxurious seating and IMAX surround sound to give
        you the best movie experience! Visit our booking page for pricing.{" "}
      </p>
      <br />
      <img src={pic3} alt="DirectorsScreen" height="50%" width="60%"></img>
      <br></br>
      <br />
      <p className="text-white">
        The seating plan will allow you to best choose the seat which will
        provide you with most comfort and best view of the main screen for an
        all round amazing experience.{" "}
      </p>
      <br />
      <img src={pic4} alt="DirectorsScreen" height="50%" width="60%"></img>
    </div>
  );
};

export default Screens;
