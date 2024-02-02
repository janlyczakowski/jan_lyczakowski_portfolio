import React from 'react';
import CreditsItem from '../components/CreditsItem';
import worldImg from '../resources/img/world_map.gif';
import mapIcon from '../resources/img/map2.svg';
import webIcon from '../resources/img/web_icon.svg';
import locationIcon from '../resources/img/location.svg';
import glidersImg from '../resources/img/gliders500x500.png';
import earthquakeImg from '../resources/img/earthquake500x500.png';
import jazzClubImg from '../resources/img/seb500x500.png';
import notebookImg from '../resources/img/notebook500x500.png';
import datalabImg from '../resources/img/datalab500x500.png';
import hogwartsImg from '../resources/img/hogwarts500x500.jpg';
import corsicaImg from '../resources/img/corsica500x500.png';
import crowdedSpaceImg from '../resources/img/crowded_space500x500.png';
import meImg from '../resources/img/Me_low_resolution.jpg';
import homeIcon from '../resources/img/home.svg';
import universityIcon from '../resources/img/university.svg';
import workIcon from '../resources/img/work.svg';

import styles from '../css/Credits.module.css';
import '../css/index.css';
import Layout from '../components/Layout';

const Credits = () => {
  return (
    <Layout>
      <section className="cv_section">
        <h2 className="section__title left section_cv">Credits</h2>
        <div className={styles.box_wrapper}>
          <h3 className={styles.credits_title}>Home</h3>
          <ul className={styles.section_list}>
            {/* CreditsItems for Home section */}
            <CreditsItem
              imgSrc={worldImg}
              altText="A world map"
              title="Background map - Geolocated images"
              sourceLink="https://en.wikipedia.org/wiki/File:Geolocated_images_in_Wikimedia_Commons_2015-01-07.png"
              sourceText="Wikipedia"
            />
            <CreditsItem
              imgSrc={mapIcon}
              altText="An icon of the map"
              title="Cartography icon - Author: pixelbazaar"
              sourceLink="https://www.svgrepo.com/svg/513222/map"
              sourceText="svgrepo"
            />
            <CreditsItem
              imgSrc={webIcon}
              altText="An icon of the computer with a screen"
              title="Web / GIS development - Uploader: SVG Repo"
              sourceLink="https://www.svgrepo.com/svg/59959/world-grid-and-a-browser-window-inside-a-circle"
              sourceText="svgrepo"
            />
            <CreditsItem
              imgSrc={locationIcon}
              altText="An icon of a locaiton pin"
              title="Location-based services - Author: Orchid"
              sourceLink="https://www.svgrepo.com/svg/509148/location-pin"
              sourceText="svgrepo"
            />
            <CreditsItem
              imgSrc={glidersImg}
              altText="An icon of gliders' visualization"
              title="Gliders' visualization - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={earthquakeImg}
              altText="A map of the earthquakes"
              title="Latest worldwide earthquakes - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={jazzClubImg}
              altText="Seb's jazz club"
              title="Seb's jazz club - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={notebookImg}
              altText="An icon of the notebook app"
              title="Notebook - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={datalabImg}
              altText="Dashboard - SDG Monitoring Dashboard"
              title="Dashboard - SDG Monitoring Dashboard - Author: Colouree"
            />
            <CreditsItem
              imgSrc={hogwartsImg}
              altText="An icon of the hogwarts map"
              title="Unlocking Hogwarts: A Case Study on School Accessibility - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={corsicaImg}
              altText="A map of Corsica"
              title="Corsica: Into the Unknown - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={crowdedSpaceImg}
              altText="A map of Corsica"
              title="Crowded Space - Author: Jan Łyczakowski"
            />
          </ul>

          <h3 className={styles.credits_title}>About me</h3>
          <ul className={styles.section_list}>
            {/* CreditsItems for About me section */}
            <CreditsItem
              imgSrc={meImg}
              altText="A picture of Jan Łyczakowski"
              title="Picture - Author: Jan Łyczakowski"
            />
            <CreditsItem
              imgSrc={homeIcon}
              altText="home icon"
              title="Home icon - Author: kudakurage"
              sourceLink="https://www.svgrepo.com/svg/500894/home"
              sourceText="svgrepo"
            />
            <CreditsItem
              imgSrc={universityIcon}
              altText="university icon"
              title="University icon - Author: Tienda Nube"
              sourceLink="https://www.svgrepo.com/svg/500449/university"
              sourceText="svgrepo"
            />
            <CreditsItem
              imgSrc={workIcon}
              altText="work icon"
              title="Work icon - Author: Gabriele Malaspina"
              sourceLink="https://www.svgrepo.com/svg/489230/work-alt"
              sourceText="svgrepo"
            />
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Credits;
