import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../css/AboutMe.module.css';
import '../css/index.css';
import Timeline from '../components/Timeline';
import Map from '../components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const cities = [
  {
    value: 0,
    label: <FontAwesomeIcon icon={faBaby} className={styles.slider_icon} />,
    id: 1,
    name: 'Braniewo',
    country: 'Poland',
    time: '1998 - 2017',
    text: 'I grew up in a small town in the north of Poland and by the time I was in high school, I was already interested in geography.',
  },
  {
    value: 13,
    id: 2,
    name: 'Warsaw',
    country: 'Poland',
    time: '2017 - 2021',
    text: "After high school, I went to the Warsaw University of Technology to study Geodesy and Cartography. That's when I really fell in love with maps and spatial data.",
  },
  {
    value: 25,
    id: 3,
    name: 'Bari',
    country: 'Italy',
    time: '2020',
    text: "During my university studies, I participated in the Eramus+ program for five months. It was a life-changing experience for me. I learned a lot and it was there that I decided I wanted to study abroad in the future and do my Master's in cartography",
  },
  {
    value: 37,
    id: 4,
    name: 'Genoa',
    country: 'Italy',
    time: '2021/2022',
    text: 'After graduation in 2021, I did 7 months internship learning the web development and web-based GIS applications. I liked it so much that I stayed there for another six months to work as a Frontend developer.',
  },
  {
    value: 50,
    id: 5,
    name: 'Munich',
    country: 'Germany',
    time: '2022/2023',
    text: 'In October I started my International Cartography M.Sc. at the Technical University of Munich where during the first semester I deepened my knowledge in cartography and geovisualizations.',
  },
  {
    value: 63,
    id: 6,
    name: 'Vienna',
    country: 'Austria',
    time: '2023',
    text: "In the second semester of my Master's, I went to Vienna to learn more about web mapping and multimedia cartography and polish my development skills at the Technical University of Vienna.",
  },
  {
    value: 75,
    id: 7,
    name: 'Transinne',
    country: 'Belgium',
    time: '2023',
    text: 'After finishing my second semester, I participated in the pilot edition of the Navigation Training Course organized by the European Space Agency where  I learned a lot about navigation systems and location-based services.',
  },
  {
    value: 87,
    id: 8,
    name: 'Dresden',
    country: 'Germany',
    time: '2023/2024',
    text: "In the third semester of my Master's, I went back to Germany to study mobile cartography and 3D mapping at the Technical University of Dresden.",
  },
  {
    value: 100,
    label: (
      <FontAwesomeIcon icon={faGraduationCap} className={styles.slider_icon} />
    ),
    id: 9,
    name: 'Vienna',
    country: 'Austria',
    time: '2024',
    text: 'In my final semester, I came back to Vienna to write my thesis about context-awareness and adaptive mobile mapping where I also worked as a tutor for the courses Web Mapping and Multimedia Cartography at the Technical University of Vienna.',
  },
];

function AboutMe() {
  const [activeCity, setActiveCity] = useState({
    value: 0,
    label: <FontAwesomeIcon icon={faBaby} className={styles.slider_icon} />,
    id: 1,
    name: 'Braniewo',
    country: 'Poland',
    time: '1998 - 2017',
    text: 'I grew up in a small town in the north of Poland and by the time I was in high school, I was already interested in geography.',
  });

  return (
    <Layout>
      <div className={styles.page_container}>
        <Map />
        <Timeline
          cities={cities}
          setActiveCity={setActiveCity}
          activeCity={activeCity}
        />
      </div>
    </Layout>
  );
}

export default AboutMe;
