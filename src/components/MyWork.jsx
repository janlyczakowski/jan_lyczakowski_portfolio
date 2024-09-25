import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

import { PORTFOLIO_ITEMS } from '../utils/constants';
import styles from '../css/MyWork.module.css';

function MyWork() {
  const [activeCategory, setActiveCategory] = useState('software development');
  const categories = ['software development', 'static maps'];

  const onClickHandler = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
    }
  };

  return (
    <section id={styles['work']}>
      <h2 className={'section_title'}>Selected work</h2>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li
            key={category}
            className={`${styles.category} ${
              activeCategory === category ? styles.active : styles.inactive
            }`}
            onClick={() => onClickHandler(category)}
            id={styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`]}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className={styles.projects_container}>
        {PORTFOLIO_ITEMS.filter((item) => activeCategory === item.category).map(
          (item, index) => (
            <PortfolioItem
              key={index}
              navigateTo={item.navigateTo}
              category={item.category}
              dataAttribute={item.dataAttribute}
              srcImg={item.srcImg}
              altImg={item.altImg}
              title={item.title}
              date={item.date}
              keywords={item.keywords}
            />
          )
        )}
      </div>
    </section>
  );
}

export default MyWork;
