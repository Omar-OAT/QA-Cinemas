import {Link} from "react-router-dom"

const Footer = () => {
    return ( 
        <footer>
            <span><Link to="/aboutus"> About Us </Link></span>
            <span><Link to="/screens"> Screens </Link></span>
            <span><Link to="/contactus"> Contact Us </Link></span>
        </footer>
     );
}
 
export default Footer;