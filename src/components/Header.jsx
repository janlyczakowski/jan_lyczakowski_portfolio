import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../css/Header.module.css';
import '../css/index.css';

function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  const arrowStyle =
    scrollTop > 0
      ? `${styles.scroll_down_arrow} ${styles.scroll_down_arrow_disabled}`
      : `${styles.scroll_down_arrow}`;

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={styles.img_container} id={styles['home']}>
        <div className={styles.title_container}>
          <h1 className={styles.title_picture}>Jan Łyczakowski</h1>
          <ul className={styles.subtitle_list}>
            <li className={styles.subtitle}>Cartographer</li>
            <li className={styles.subtitle}>GIS Developer</li>
            <li className={styles.subtitle}>Front-end Developer</li>
          </ul>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={arrowStyle} />
      </div>
    </header>
  );
}

export default Header;
