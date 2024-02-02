import React, { useRef } from 'react';
import Layout from '../components/Layout';
import picture_me from '../resources/img/Me_low_resolution.jpg';
import styles from '../css/AboutMe.module.css';
import '../css/index.css';

function AboutMe() {
  const mapRef = useRef();

  const onClickHandler = () => {
    if (window.innerWidth >= 1000) {
      mapRef.current.scrollIntoView();
    }
  };
  return (
    <Layout>
      <section className={styles.intro} id={styles['about']}>
        <h2 className={`${styles.section__title_intro} section__title`}>
          About me
        </h2>
        <div className={styles.section_intro_content}>
          <p className={styles.section_intro_text}>
            Hi, I am Jan a geodetic engineer and a cartography student. This is
            my story.
          </p>
          <p className={styles.section_intro_text}>
            I was born in the small town of{' '}
            <span className={styles.city} onClick={onClickHandler}>
              Braniewo
            </span>
            , in the north of Poland, next to the Baltic Sea. I did my B.Sc. in
            Geodesy and Cartography at the{' '}
            <span className={styles.city} onClick={onClickHandler}>
              Warsaw{' '}
            </span>
            University of Technology from 2017 to 2021. During my studies, I
            participated in the Erasmus+ program for one semester in{' '}
            <span className={styles.city} onClick={onClickHandler}>
              Bari
            </span>{' '}
            (Italy) in 2020.
          </p>
          <p className={styles.section_intro_text}>
            After graduation I did 7 months-internship, learning development of
            webGIS applications at{' '}
            <a
              href="https://www.colouree.com/it/"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              Colouree
            </a>{' '}
            in{' '}
            <span className={styles.city} onClick={onClickHandler}>
              Genoa
            </span>{' '}
            (Italy) where eventually I stayed to work as Front-End Web Developer
            for 6 months more.
          </p>
          <p className={styles.section_intro_text}>
            In October 2022 I started the{' '}
            <a
              href="https://cartographymaster.eu/"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              International Cartography M.Sc.
            </a>{' '}
            Therefore I spent the first semester at the Technical University of
            <span className={styles.city} onClick={onClickHandler}>
              {' '}
              Munich
            </span>
            , the second semester at the Technical University of{' '}
            <span className={styles.city} onClick={onClickHandler}>
              {' '}
              Vienna
            </span>
            . In June 2023 I participated in the pilot edition of the Navigation
            Training Course organized by the European Space Agency (ESA). Then I
            moved back to Germany for the third semester of my studies at the
            Technical University of
            <span className={styles.city} onClick={onClickHandler}>
              {' '}
              Dresden
            </span>
            . The last semester I am going to spend again in
            <span className={styles.city} onClick={onClickHandler}>
              {' '}
              Vienna
            </span>{' '}
            where I will write on my Master's thesis.
          </p>
          <p className={styles.section_intro_text}>
            I am fascinated with maps, especially combining cartography with
            computer science. I love making web maps and I am in particular
            interested in location-based services and 3D mapping.
          </p>
        </div>
        <img
          src={picture_me}
          className={styles.intro_picture}
          alt=" Jan Łyczakowski smiling in Polignano a Mare"
        />
      </section>
      <section className={styles.map_container}>
        <div id={styles['my_map']} ref={mapRef}>
          <div
            id={styles['braniewo']}
            className={`${styles.home_marker} ${styles.marker}`}
          >
            <span>Braniewo, Poland</span>
          </div>
          <div
            id={styles['genoa']}
            className={`${styles.work_marker} ${styles.marker}`}
          >
            <span>Genoa, Italy</span>
          </div>
          <div
            id={styles['warsaw']}
            className={`${styles.university_marker} ${styles.marker}`}
          >
            <span>Warsaw, Poland</span>
          </div>
          <div
            id={styles['bari']}
            className={`${styles.university_marker} ${styles.marker}`}
          >
            <span>Bari, Italy</span>
          </div>
          <div
            id={styles['munich']}
            className={`${styles.university_marker} ${styles.marker}`}
          >
            <span>Munich, Germany</span>
          </div>
          <div
            id={styles['vienna']}
            className={`${styles.university_marker} ${styles.marker}`}
          >
            <span>Vienna, Austria</span>
          </div>
          <div
            id={styles['dresden']}
            className={`${styles.university_marker} ${styles.marker}`}
          >
            <span>Dresden, Germany</span>
          </div>
          <div className={styles.map_legend}>
            <ul className={styles.map_legend_list}>
              <li className={styles.map_legend_item}>
                <div
                  className={`${styles.home_marker} ${styles.legend_marker}`}
                ></div>
                <p className={styles.legend_text}>Home</p>
              </li>
              <li className={styles.map_legend_item}>
                <div
                  className={`${styles.university_marker} ${styles.legend_marker}`}
                ></div>
                <p className={styles.legend_text}>Education</p>
              </li>
              <li className={styles.map_legend_item}>
                <div
                  className={`${styles.work_marker} ${styles.legend_marker}`}
                ></div>
                <p className={styles.legend_text}>Work</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutMe;
