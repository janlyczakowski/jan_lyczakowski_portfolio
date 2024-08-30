import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
    category,
    link_online,
    link_github,
  } = content;

  return (
    <Layout>
      <section className={`${styles.intro_portfolio_item}`}>
        <h2 className={`section_title ${styles.project_title}`}>{title}</h2>
        <div className={styles.project_subtitle_container}>
          <p
            className={`${styles.project_type} ${[
              styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
            ]}`}
          >
            {subtitle}
          </p>
          <p
            className={`${styles.project_date} ${[
              styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
            ]}`}
          >
            {date}
          </p>
        </div>
        <div className={styles.description_container}>
          {description.map((line, index) => {
            return (
              <p className={styles.description} key={index}>
                {line}
              </p>
            );
          })}
        </div>
        <ul className={styles.links}>
          {link_online !== '' && (
            <li className={styles.online}>
              <FontAwesomeIcon
                icon={faGlobe}
                className={`${styles.icon} ${[
                  styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
                ]}`}
              />
              <p className={styles.link_description}>
                Click{' '}
                <a
                  href={link_online}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  here
                </a>{' '}
                to find it online
              </p>
            </li>
          )}
          {link_github !== '' && (
            <li className={styles.github}>
              <FontAwesomeIcon
                icon={faGithub}
                className={`${styles.icon} ${[
                  styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
                ]}`}
              />
              <p className={styles.link_description}>
                Click{' '}
                <a
                  href={link_github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  here
                </a>{' '}
                to check the code
              </p>
            </li>
          )}
        </ul>
        <p className={styles.section_subtitle}>Technology</p>
        <div className={styles.tech_container}>
          <ul className={styles.tech_list}>
            {technology.map((item) => {
              return (
                <li className={styles.tech_item} key={item.text}>
                  <div className={styles.tech_icon}>{item.icon}</div>
                  <p className={styles.tech_name}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <p className={`${styles.section_intro_content} ${styles.tech_content}`}>
          {technology}
        </p> */}
        <div className={styles.portofolio_picture_container}>
          <img
            src={srcImg}
            className={`${styles.portfolio_picture}`}
            alt={altImg}
          />
        </div>
      </section>
    </Layout>
  );
}

export default MyProject;
