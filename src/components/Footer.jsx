import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../css/Footer.module.css';
import '../css/index.css';

function Footer() {
  return (
    <footer>
      <a href="mailto:lyczakowski.jan@gmail.com" className={styles.footer_link}>
        lyczakowski.jan@gmail.com
      </a>
      {' | '}
      <Link
        to={'/credits'}
        className={`${styles.footer_link} ${styles.credits}`}
      >
        Credits
      </Link>
      <ul className={styles.social_list}>
        <li className={styles.social_list_item}>
          <a
            className={styles.social_list_link}
            href="https://www.linkedin.com/in/jan-%C5%82yczakowski-14a502222/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.footer_icon} />
          </a>
        </li>
        <li className={styles.social_list_item}>
          <a
            className={styles.social_list_link}
            href="https://github.com/janlyczakowski"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.footer_icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
