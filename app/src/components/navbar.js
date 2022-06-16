import '../styles/navBar.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import carritoLogo from "../images/carrito.png"

function Navbar() {
    return (
        <>
            <nav className="navBar">
                <Link to="/" className="page-name">Restaurant</Link>
                <ul>
                    <CustomLink to="/carrito">
                        <img src={carritoLogo} alt="carritoLogo" className='logo'/>
                    </CustomLink>
                </ul>
            </nav>
            <nav className='secondaryNavBar'>
                <ul>
                    <CustomLink to="/carta">Menu</CustomLink>
                    <CustomLink to="/offers">Offers</CustomLink>
                    <CustomLink to="/about">About us</CustomLink>
                </ul>
            </nav>
        </>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar;