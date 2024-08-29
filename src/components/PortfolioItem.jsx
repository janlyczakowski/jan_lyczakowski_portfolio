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
  // const [isCoverTextVisible, setIsCoverTextVisible] = useState(false);

  // const onMouseOverHandler = () => {
  //   setIsCoverTextVisible(true);
  // };

  // const onMouseOutHandler = () => {
  //   setIsCoverTextVisible(false);
  // };

  // const coverTextStyle = isCoverTextVisible
  //   ? `${styles.portfolio_item_cover_text} ${styles.portfolio_item_cover_text_show}`
  //   : `${styles.portfolio_item_cover_text}`;
  return (
    <div className={styles.project}>
      <Link
        to={navigateTo}
        className={styles.portfolio_item}
        data-category={category}
        // data-gen={dataGen}
        // onMouseOver={onMouseOverHandler}
        // onMouseOut={onMouseOutHandler}
      >
        {/* <div className={coverTextStyle} data-attribute={dataAttribute}>
        {coverText}
        <br />
        <span className={styles.cover_text_date}>{date}</span>
      </div> */}

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
