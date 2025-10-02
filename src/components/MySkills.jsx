import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faMobileScreen,
  faDatabase,
  faCode,
  faLayerGroup,
  faDisplay,
  faLaptopCode,
  faGlobe,
  faLocationDot,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../css/MySkills.module.css';
import '../css/index.css';

function MySkills() {
  return (
    <>
      <section className={styles.my_skills}>
        <h2 className={'section_title'}>My skills</h2>
        <div className={styles.categories}>
          <div className={styles.category_container}>
            <h3 className={styles.category_title}>Web Development</h3>
            <div className={styles.category_subtitles_container}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.arrow_icon}
              />
              <p className={styles.category_subtitles}>Development</p>
            </div>

            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>HTML</li>
              <li className={styles.skills_element}>CSS</li>
              <li className={styles.skills_element}>JavaScript</li>
              <li className={styles.skills_element}>TypeScript</li>
              <li className={styles.skills_element}>React</li>
              <li className={styles.skills_element}>Git</li>
            </ul>
            <div className={styles.category_subtitles_container}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.arrow_icon}
              />
              <p className={styles.category_subtitles}>Mapping libraries</p>
            </div>
            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>Leaflet</li>
              <li className={styles.skills_element}>Three.js</li>
              <li className={styles.skills_element}>Mapbox GL JS</li>
              <li className={styles.skills_element}>ArcGIS Maps SDK for JS</li>
            </ul>
          </div>

          <div className={styles.category_container}>
            <h3 className={styles.category_title}>GIS</h3>
            <div className={styles.category_subtitles_container}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.arrow_icon}
              />
              <p className={styles.category_subtitles}>Software</p>
            </div>
            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>ArcGIS Pro</li>
              <li className={styles.skills_element}>QGIS</li>
              <li className={styles.skills_element}>Adobe Illustrator</li>
              <li className={styles.skills_element}>Blender</li>
            </ul>
            <div className={styles.category_subtitles_container}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.arrow_icon}
              />
              <p className={styles.category_subtitles}>
                Data Processing & Analysis
              </p>
            </div>
            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>Python</li>
              <li className={styles.skills_element}>R</li>
              <li className={styles.skills_element}>ArcGIS API for Python</li>
            </ul>
          </div>

          <div className={styles.category_container}>
            <h3 className={styles.category_title}>Database Management</h3>
            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>SQL</li>
              <li className={styles.skills_element}>PostgreSQL</li>
              <li className={styles.skills_element}>PostGIS</li>
            </ul>
          </div>

          <div className={styles.category_container}>
            <h3 className={styles.category_title}>Mobile Development</h3>
            <ul className={styles.skills_list}>
              <li className={styles.skills_element}>Java</li>
              <li className={styles.skills_element}>Kotlin</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.categories_icons_container}>
        <div className={styles.categories_icons}>
          <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          <FontAwesomeIcon icon={faLayerGroup} className={styles.icon} />
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
          <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <FontAwesomeIcon icon={faMobileScreen} className={styles.icon} />
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
        </div>
        <div className={styles.categories_icons}>
          <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          <FontAwesomeIcon icon={faLayerGroup} className={styles.icon} />
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
          <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <FontAwesomeIcon icon={faMobileScreen} className={styles.icon} />
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
        </div>
      </div>
    </>
  );
}

export default MySkills;
