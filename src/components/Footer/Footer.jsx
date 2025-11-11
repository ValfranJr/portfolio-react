import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.social_itens}>
        <a href="mailto:valfran-goncalves@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/valfran-goncalves/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ValfranJr">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p>&copy; 2025 Valfran Jr. - All rights reserved.</p>
    </div>
  );
}
