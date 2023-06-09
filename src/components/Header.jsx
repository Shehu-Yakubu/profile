import resume from "../assets/Resume.pdf"

function Header() {
    return (
        <nav className="nav">
            <h3 className="nav-title">SY</h3>

            <ul className="nav-ul">
                <li className="nav-li">
                    <a href="#">Home</a>
                </li>

                <li className="nav-li">
                    <a href="#">Services</a>
                </li>
                
                <li className="nav-li">
                    <a href="#">Projects</a>
                </li>

                <li className="nav-li">
                    <a href="#">Contact</a>
                </li>

                <li className="nav-li">
                    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header