import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BiHomeAlt2, BiLogInCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Login/AuthContext";

const Navbar = () => {

    const { getCartSize, logout, login, userId } = useContext(AuthContext);

    const [cartSizeLocal, setCartSizeLocal] = useState(getCartSize);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    }

    const handleRegister = () => {
        navigate("/register1");
    }

    useEffect(() => {
        setCartSizeLocal(getCartSize);
    }, [getCartSize]);

    const handleLogin = () => {
        navigate("/login");
    }

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
                        <li className="login-li"><button onClick={handleLogin}> <strong>Accedi</strong> </button></li>
                        <li className="register-li"><button onClick={handleRegister}> <strong>Registrati</strong> </button></li>
                        <Link to={"/"}><li><strong><BiHomeAlt2 className="cart-icon" /></strong></li></Link>
                        <li><FaUserCircle className="user-icon" /></li>
                        <li><strong><BsSearch className="search-icon" /></strong></li>
                        <Link to={"/cart"}><li className="cart-li"><FiShoppingCart className="cart-icon" />
                            <span className="cart-total"> {cartSizeLocal} </span>
                        </li></Link>
                        <li className="logout-li" onClick={handleLogout}><RiLogoutCircleRLine className="logout-icon" /></li>

                    </ul>
                </div>
            </div>
            <hr />
            <div className="nav-element3">
                <ul className="list2">

                    <li><strong> <Link to="/sviluppo">Sviluppo IT</Link> </strong></li>
                    <li><strong><Link to="/design">Design</Link></strong></li>
                    <li><strong><Link to="/lingue">Lingue</Link></strong></li>
                    <li><strong><Link to="/soft-skills">Soft Skills</Link></strong></li>

                </ul>
            </div>



        </div>
    );
}

export default Navbar;