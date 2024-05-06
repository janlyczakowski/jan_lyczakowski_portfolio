import React from 'react';
import mapIcon from '../resources/img/map2.svg';
import webIcon from '../resources/img/web_icon.svg';
import locationIcon from '../resources/img/location2.svg';

import styles from '../css/MyInterests.module.css';
import '../css/index.css';

function MyInterests() {
  return (
    <section className={styles.my_interests} id="my_interests">
      <h2 className={'section__title'}>My interests</h2>
      <div className={styles.interests}>
        <div className={`${styles.interest} ${styles.interest_cartography}`}>
          <img
            className={styles.interest_img}
            src={mapIcon}
            alt="An icon of the map"
          />
          <div className={styles.description_container}>
            <h3 className={styles.interest_description}>Cartography</h3>
          </div>
        </div>

        <div className={styles.interest}>
          <img
            className={styles.interest_img}
            src={locationIcon}
            alt="An icon of a location pin"
          />
          <div className={styles.description_container}>
            <h3 className={styles.interest_description}>
              Location-based services
            </h3>
          </div>
        </div>

        <div className={`${styles.interest} ${styles.interest_web}`}>
          <img
            className={`${styles.interest_img} ${styles.web_img}`}
            src={webIcon}
            alt="An icon of the computer with a screen"
          />
          <div className={styles.description_container}>
            <h3 className={styles.interest_description}>Web GIS</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyInterests;
