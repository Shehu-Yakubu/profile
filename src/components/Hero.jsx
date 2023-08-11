import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="hero">
            <h3 className="hero-welcome">Hi, I'm Shehu</h3>
            <h1 className="hero-profession">I'M A FRONTEND DEVELOPER</h1>
            {/* <button className="hero-button"></button> */}
            {/* <Link className="hero-button" to="/src/pages/Projects.jsx">View My Work</Link> */}
            <button className="hero-button">
                <Link className="hero-link" to="/src/pages/Projects.jsx">View My Work</Link>
            </button>
        </div>
    )
}

export default Hero