import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
            <span><Link to="/"> Home </Link></span>
            <span><Link to="/films"> Films </Link></span>
            <span><Link to="/openingtimes"> Opening Times </Link></span>
            <span><Link to="/where"> Where to find us </Link></span>
            <span><Link to="/places"> Places to go </Link></span>
        </>
     );
}
 
export default NavBar;