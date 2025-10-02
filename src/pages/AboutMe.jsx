import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../css/AboutMe.module.css';
import '../css/index.css';
import Timeline from '../components/Timeline';
import Map from '../components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const cities = [
  {
    value: 0,
    label: <FontAwesomeIcon icon={faBaby} className={styles.slider_icon} />,
    id: 1,
    name: 'Braniewo',
    country: 'Poland',
    time: '1998 - 2017',
    text: 'I grew up in a small town in the north of Poland and since high school, I was already interested in geography.',
  },
  {
    value: 11,
    id: 2,
    name: 'Warsaw',
    country: 'Poland',
    time: '2017 - 2021',
    text: "After high school, I decided to study Geodesy and Cartography at the Warsaw University of Technology. That's when I became fascinated with maps and geospatial data.",
  },
  {
    value: 22,
    id: 3,
    name: 'Bari',
    country: 'Italy',
    time: '2020',
    text: "During my university studies, I participated in the Eramus+ program for five months. It was a life-changing experience, not only academically but also culturally. It was during this time that I decided to study abroad and pursue my Master's in Cartography.",
  },
  {
    value: 33,
    label: (
      <FontAwesomeIcon icon={faBriefcase} className={styles.slider_icon} />
    ),
    id: 4,
    name: 'Genoa',
    country: 'Italy',
    time: '2021/2022',
    text: 'After graduating in 2021, I successfully completed a seven-month internship in web development, where I discovered a passion for coding and web mapping. I enjoyed the experience so much that I continued working at the company as a front-end developer for six months.',
  },
  {
    value: 44,
    id: 5,
    name: 'Munich',
    country: 'Germany',
    time: '2022/2023',
    text: 'In October I started an International Cartography M.Sc. at the Technical University of Munich where during the first semester I expanded my knowledge in cartography and geovisualizations.',
  },
  {
    value: 55,
    id: 6,
    name: 'Vienna',
    country: 'Austria',
    time: '2023',
    text: 'In the second semester at the Technical University of Vienna, I dived deeper into web mapping and multimedia cartography, gaining hands-on experience through practical projects that helped me polish my development skills.',
  },
  {
    value: 66,
    id: 7,
    name: 'Transinne',
    country: 'Belgium',
    time: '2023',
    text: 'After finishing the second semester of my Master’s, I participated in the pilot edition of the Navigation Training Course organized by the European Space Agency where I learned a lot about navigation systems and location-based services.',
  },
  {
    value: 77,
    id: 8,
    name: 'Dresden',
    country: 'Germany',
    time: '2023/2024',
    text: "In the third semester of my Master's, I went back to Germany to study mobile cartography and 3D mapping at the Technical University of Dresden.",
  },
  {
    value: 88,
    label: (
      <FontAwesomeIcon icon={faGraduationCap} className={styles.slider_icon} />
    ),
    id: 9,
    name: 'Vienna',
    country: 'Austria',
    time: '2024',
    text: 'In my final semester, I came back to Vienna to write my thesis about context-awareness and adaptive mobile mapping where I also worked as a tutor for the courses Web Mapping and Multimedia Cartography at the Technical University of Vienna.',
  },
  {
    value: 100,
    label: (
      <FontAwesomeIcon icon={faBriefcase} className={styles.slider_icon} />
    ),
    id: 10,
    name: 'Innsbruck',
    country: 'Austria',
    time: '2025',
    text: 'After graduating from the International Cartography Master program, I have been working as a WebGIS Administrator. In this role, I manage and maintain WebGIS platforms and geospatial databases, while optimizing and automating geospatial data workflows.',
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
        <Map activeCity={activeCity} cities={cities} />
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
