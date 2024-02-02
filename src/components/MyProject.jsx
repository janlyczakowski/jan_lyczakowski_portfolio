import React from 'react';
import Layout from './Layout';
import styles from '../css/MyProject.module.css';
import '../css/index.css';

function MyProject(props) {
  const { content } = props;
  const {
    title,
    subtitle,
    date,
    srcImg,
    altImg,
    description,
    technology,
    link,
  } = content;

  return (
    <Layout>
      <section
        className={`${styles.intro_portfolio_item}`}
        id={styles['about']}
      >
        <h2
          className={`section__title ${styles.section__title_intro_portfolio_item}`}
        >
          {title}
        </h2>
        <p className={`${styles.portfolio_item_subtitle}`}>
          {subtitle} <br />
          <span className={`${styles.portfolio_item_date}`}>{date}</span>
        </p>
        <img
          src={srcImg}
          className={`${styles.portfolio_picture}`}
          alt={altImg}
        />
        <p
          className={`${styles.section_intro_subtitle} ${styles.portfolio_item_about}`}
          id={styles['about_portfolio_item']}
        >
          About
        </p>
        <div
          className={`${styles.section_intro_content} ${styles.about_content}`}
        >
          {description.map((line, index) => {
            return (
              <p className={styles.no_margin_top} key={index}>
                {line}
              </p>
            );
          })}
        </div>
        <p
          className={`${styles.section_intro_subtitle} ${styles.portfolio_item_tech}`}
        >
          Technology
        </p>
        <p className={`${styles.section_intro_content} ${styles.tech_content}`}>
          {technology}
        </p>
        <p
          className={`${styles.section_intro_subtitle} ${styles.portfolio_item_online}`}
        >
          Online
        </p>
        <p
          className={`${styles.section_intro_content} ${styles.online_content}`}
        >
          <a
            href={link}
            className={`${styles.portfolio_item_link}`}
            target="_blank"
            rel="noreferrer"
          >
            Click here
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default MyProject;
