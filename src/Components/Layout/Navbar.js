import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSearch } from "react-icons/bs"

const Navbar = () => {

    const location = useLocation();
    const hiddenNavbarRoutes = ['/login', '/register1', '/register2'];
    const shouldShowNavbar = !hiddenNavbarRoutes.includes(location.pathname);
    if (!shouldShowNavbar) {
        return null;
    }
    return (
        <div className="navbar">
            <div className="nav-element">
                <div className="logo-element">

                    <Link to={"/"}><img className="logo" src="images/logos.jpg" alt="logos" /></Link>
                    <h1 className="h1-logo">BrainBooster Courses</h1>
                </div>
                <div className="list-container">
                    <ul className="list1">
                        
                        <Link to={"/"}><li><strong><BiHomeAlt2 className="cart-icon" /></strong></li></Link>
                        
                        <li><strong><BsSearch className="search-icon" /></strong></li>
                        <Link to={"/cart"}><li><FiShoppingCart className="cart-icon" />
                            <span className="cart-total">10</span>
                        </li></Link>
                        
                    </ul>
                </div>
            </div>
            <hr />
            <div className="nav-element3">
                <ul className="list2">

                    <li><strong>Sviluppo IT</strong></li>
                    <li><strong>Design</strong></li>
                    <li><strong>Lingue</strong></li>
                    <li><strong>Soft Skills</strong></li>

                </ul>
            </div>



        </div>
    );
}

export default Navbar;