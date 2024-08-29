import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../css/Footer.module.css';
import '../css/index.css';

function Footer() {
  return (
    <footer>
      <ul className={styles.footer_list}>
        <li className={styles.footer_item}>
          <a
            className={styles.footer_link}
            href="https://www.linkedin.com/in/jan-%C5%82yczakowski-14a502222/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.footer_icon} />
          </a>
        </li>
        <li className={styles.footer_item}>
          <a
            className={styles.footer_link}
            href="https://github.com/janlyczakowski"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.footer_icon} />
          </a>
        </li>
      </ul>
      <div className={styles.description_container}>
        <p className={styles.copyright}>&copy; 2024</p>
        <p className={styles.copyright}>Jan Łyczakowski. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
