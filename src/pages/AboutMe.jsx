import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/AboutMe.module.css';
import '../css/index.css';
import Slider from '../components/Slider';
import Map from '../components/Map';

function AboutMe() {
  return (
    <Layout>
      <div className={styles.page_container}>
        <Map />
        <Slider />
      </div>
    </Layout>
  );
}

export default AboutMe;
