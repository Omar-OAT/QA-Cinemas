import "./Classifications.css";
import picture1 from "../images/Universal.png";
import picture2 from "../images/PG.png";
import picture3 from "../images/12A.png";
import picture4 from "../images/12.png";
import picture5 from "../images/15.png";
import picture6 from "../images/18.png";

const Classifications = () => {
  return (
    <section className="main-section">
    <div className="main-bg">
      <br />
      <h3>QA Cinemas</h3>
      <h2> Movie Classifications </h2>
      <div className="line">
                    <div />
                    <div />
                    <div />
                </div>
      <br />
      <p className="text">
        {" "}
        This page is dedicated to providing you with information regarding the
        different age classifications for our movies.<br></br> If there is any more
        information you require, please visit the 'Contact Us' page of this
        website.{" "}
      </p>
      </div>
      <div>
      <table className="ClassTable">
        <tr>
          <th>Age Rating</th>
          <th>Description</th>
        </tr>
        <tr>
          <img src={picture1} alt="Universal" height="70px" width="70px" />
          <td> Universal, suitable for all </td>
        </tr>
        <tr>
          <img src={picture2} alt="PG" height="70px" width="70px" />
          <td> Suitable for all ages, but Parental Guidance is recommended </td>
        </tr>
        <tr>
          <img src={picture3} alt="12A" height="70px" width="70px" />
          <td>
            {" "}
            Suitable for ages 12 and over, children under the age of 12 to be
            accompanied by an adult{" "}
          </td>
        </tr>
        <tr>
          <img src={picture4} alt="12" height="70px" width="70px" />
          <td> Suitable for ages 12 and over, unsuitable for children </td>
        </tr>
        <tr>
          <img src={picture5} alt="15" height="70px" width="70px" />
          <td> Suitable for ages 15 and over </td>
        </tr>
        <tr>
          <img src={picture6} alt="18" height="70px" width="70px" />
          <td> Suitable for ages 18 and over </td>
        </tr>
      </table>
<br />
      <p className="txt1">
        {" "}
        Please use the below links for any additional information you might
        require regarding the specific Movie Classifications:{" "}
      </p>
      <a target="_blank" href="https://www.bbfc.co.uk/about-classification">
        British Board of Film Classification
      </a>
      <br></br>
      <a target="_blank" href="https://www.motionpictures.org/film-ratings/">
        Motion Pictures
      </a>
      <br></br>
      <a target="_blank" href="https://parentpreviews.com/movie-ratings/uk">
        Parent Previews
      </a>
      <br></br>
    </div>
    </section>
  );
};

export default Classifications;
