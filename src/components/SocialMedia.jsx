import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedinIn,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className="social-media">
            <ul className="social-ul">
                <li className="social-li">
                    <a href="https://www.github.com/Shehu-Yakubu">
                        <FontAwesomeIcon className="github" icon={faGithub} size="2x" />
                    </a>
                </li>

                <li className="social-li">
                    <a href="https://www.twitter.com/shehyak">
                        <FontAwesomeIcon className="twitter" icon={faTwitter} size="2x" />
                    </a>
                </li>

                <li className="social-li">
                    <a href="https://www.linkedin.com/in/shehu-yakubu-83aa48131/">
                        <FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="2x" />
                    </a>
                </li>
                
                <li className="social-li">
                    <a href="https://api.whatsapp.com/send?phone=2349034789591">
                        <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} size="2x" />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default SocialMedia;