import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MyWork.module.css';

import '../css/index.css';

function PortfolioItem(props) {
  const {
    navigateTo,
    dataSpec,
    dataGen,
    dataAttribute,
    srcImg,
    altImg,
    coverText,
    date,
  } = props;
  const [isCoverTextVisible, setIsCoverTextVisible] = useState(false);

  const onMouseOverHandler = () => {
    setIsCoverTextVisible(true);
  };

  const onMouseOutHandler = () => {
    setIsCoverTextVisible(false);
  };

  const coverTextStyle = isCoverTextVisible
    ? `${styles.portfolio_item_cover_text} ${styles.portfolio_item_cover_text_show}`
    : `${styles.portfolio_item_cover_text}`;
  return (
    <Link
      to={navigateTo}
      className={styles.portfolio_item}
      data-spec={dataSpec}
      data-gen={dataGen}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <div className={coverTextStyle} data-attribute={dataAttribute}>
        {coverText}
        <br />
        <span className={styles.cover_text_date}>{date}</span>
      </div>
      <img
        src={srcImg}
        alt={altImg}
        className={styles.portfolio_img}
        data-attribute={dataAttribute}
      />
    </Link>
  );
}

export default PortfolioItem;
