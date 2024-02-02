import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../css/Header.module.css';
import '../css/index.css';

function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  // toggle visibility of the blinking arrow

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
        <h1 className={styles.title_picture}>Jan Łyczakowski</h1>
        <FontAwesomeIcon icon={faChevronDown} className={arrowStyle} />
      </div>
      <h1 className={styles.title_picture_mobile}>Jan Łyczakowski</h1>
    </header>
  );
}

export default Header;
