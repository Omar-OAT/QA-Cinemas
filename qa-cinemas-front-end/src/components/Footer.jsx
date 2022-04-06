import {Link} from "react-router-dom"

const Footer = () => {
    return ( 
        <footer>
            <Link to="/aboutus"> About Us </Link>
            <Link to="/screens"> Screens </Link>
            <Link to="/contactus"> Contact Us </Link>
        </footer>
    );
}
 
export default Footer;