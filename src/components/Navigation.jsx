import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/index.css';
import styles from '../css/Navigation.module.css';

function Navigation(props) {
  const location = useLocation();
  const { pathname } = location;
  const { mobileNavOpen, setMobileNavOpen } = props;

  const listItems = [
    { to: '/', id: 'home', text: 'Home' },
    { to: '/about_me', id: 'about_me', text: 'About me' },
    { to: '/contact', id: 'contact', text: 'Contact' },
  ];

  const onClickHamburgerHandler = () => {
    setMobileNavOpen((current) => !current);
  };

  const navStyle = mobileNavOpen
    ? `${styles.nav} ${styles.open_nav} `
    : `${styles.nav}`;

  const hamburgerStyle = mobileNavOpen
    ? `${styles.hamburger} ${styles.open_nav}`
    : `${styles.hamburger}`;

  const navToggleStyle = mobileNavOpen
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
