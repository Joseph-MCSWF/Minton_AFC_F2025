import '../styles/AppNavbar.css';
import { Navbar } from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import logo from '../assets/favicon.png';

export default function AppNavbar() {
    return (
        <Navbar className="elven-navbar fixed-top">
            <nav className="nav-right">
                <RouterNavLink className="linkStyle nav-link" to="/Splash">Splash</RouterNavLink>
                <RouterNavLink className="linkStyle nav-link" to="/Menu">Menu</RouterNavLink>
                <RouterNavLink className="linkStyle nav-link" to="/Hiring">Hiring</RouterNavLink>
            </nav>
            <div className="nav-center">
                <img className="logo" src={logo} alt="LOTR Favicon" />
                <div className="navText">THE LOTR RESTAURANT</div>
            </div>
        </Navbar>
    );
}
