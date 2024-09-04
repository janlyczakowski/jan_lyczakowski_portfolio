import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/index.css';
import styles from '../css/Navigation.module.css';

function Navigation(props) {
  const location = useLocation();
  const { pathname } = location;
  const { isMobileNavOpen, setIsMobileNavOpen } = props;

  const listItems = [
    { to: '/', id: 'home', text: 'Home' },
    { to: '/about_me', id: 'about_me', text: 'About me' },
    { to: '/map', id: 'map', text: 'Map' },
  ];

  const onClickHamburgerHandler = () => {
    setIsMobileNavOpen((current) => !current);
  };

  const navStyle = isMobileNavOpen
    ? `${styles.nav} ${styles.open_nav} `
    : `${styles.nav}`;

  const hamburgerStyle = isMobileNavOpen
    ? `${styles.hamburger} ${styles.open_nav}`
    : `${styles.hamburger}`;

  const navToggleStyle = isMobileNavOpen
    ? `${styles.nav_toggle} ${styles.open_nav}`
    : `${styles.nav_toggle}`;

  const styleActivePage = (itemId) => {
    let newItemId = `/${itemId}`;

    if (itemId === 'home') {
      newItemId = '/';
    }
    const newStyle =
      newItemId === pathname
        ? `${styles.nav_link} ${styles.active_nav}`
        : `${styles.nav_link}`;

    return newStyle;
  };
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add(styles.no_scroll);
    } else {
      document.body.classList.remove(styles.no_scroll);
    }
  }, [isMobileNavOpen]);

  return (
    <div>
      <button
        className={navToggleStyle}
        aria-label="toggle navigation"
        onClick={onClickHamburgerHandler}
      >
        <span className={hamburgerStyle}></span>
      </button>
      <nav className={navStyle}>
        <ul className={styles.nav_list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.nav_item}>
              <Link to={item.to} className={styleActivePage(item.id)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
