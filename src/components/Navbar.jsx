import { Link } from "react-router-dom";
import resume from "../assets/Resume.pdf"

const Navbar = () => {
    return (
        <nav className="nav">
            <h3 className="nav-title">
                <Link to="/" className="nav-router-link">SY</Link>
            </h3>

            <ul className="nav-ul">
            <li className="nav-li">
                    <Link to="/">Home</Link>
                </li>

                <li className="nav-li">
                    <Link to="/About">About</Link>
                </li>
                
                <li className="nav-li">
                    <Link to="/projects">Projects</Link>
                </li>

                <li className="nav-li">
                    <Link to="/contact">Contact</Link>
                </li>

                <li className="nav-li">
                    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;