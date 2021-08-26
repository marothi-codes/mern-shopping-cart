import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["side-drawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="side-drawer-links" onClick={click}>
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
        </div>
    );
};

export default SideDrawer;
