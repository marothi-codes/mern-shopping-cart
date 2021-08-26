import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>MERN Stack Shop</h2>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                             Cart 
                        <span className="cart-items-count">0</span>
                        </span>
                    </Link>
                </li>
            </ul>

            <div className="menu-icon" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;
