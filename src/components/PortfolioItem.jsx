import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MyWork.module.css';

import '../css/index.css';

function PortfolioItem(props) {
  const {
    navigateTo,
    category,
    dataAttribute,
    srcImg,
    altImg,
    title,
    date,
    keywords,
  } = props;

  return (
    <div className={styles.project}>
      <Link
        to={navigateTo}
        className={styles.portfolio_item}
        data-category={category}
      >
        <img
          src={srcImg}
          alt={altImg}
          className={styles.portfolio_img}
          data-attribute={dataAttribute}
        />
      </Link>
      <div className={styles.description_container}>
        <p className={styles.portfolio_date}>{date}</p>
        <p className={styles.portfolio_title}>{title}</p>
        <ul className={styles.portfolio_keywords}>
          {keywords.map((keyword, index) => {
            return (
              <li
                key={index}
                className={`${styles.keyword} ${[
                  styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
                ]}`}
                data-category={category}
              >
                {keyword}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioItem;
