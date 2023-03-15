import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedinIn,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <nav className="footer">
            <ul className="footer-ul">
                <li className="footer-li">
                    <a href="https://www.github.com/Shehu-Yakubu">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
                <li className="footer-li">
                    <a href="https://www.twitter.com/shehyak">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </li>
                <li className="footer-li">
                    <a href="https://www.linkedin.com/in/shehu-yakubu-18">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </li>
                <li className="footer-li">
                    <a href="https://api.whatsapp.com/send?phone=2349034789591">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Footer