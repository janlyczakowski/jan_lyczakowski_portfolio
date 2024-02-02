import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

import { PORTFOLIO_ITEMS } from '../utils/constants';
import styles from '../css/MyWork.module.css';

function MyWork() {
  const [currentGenericCategory, setCurrentGenericCategory] = useState('all');
  const [currentTechCategory, setCurrentTechCategory] = useState('all');

  const handleCategoryChange = (category, type) => {
    if (type === 'generic_category') {
      setCurrentGenericCategory(category);
    } else {
      setCurrentTechCategory(category);
    }
  };

  const isCategoryActive = (category, type) => {
    if (type === 'generic_category') {
      return currentGenericCategory === category;
    } else {
      return currentTechCategory === category;
    }
  };

  return (
    <section id={styles['work']}>
      <h2 className={'section__title'}>My work</h2>
      <ul className={`${styles.categories} ${styles.generic_categories}`}>
        {['all', 'geo-spatial', 'other'].map((category) => (
          <li
            key={category}
            className={`${styles.category} ${
              isCategoryActive(category, 'generic_category') && styles.active
            }`}
            onClick={() => handleCategoryChange(category, 'generic_category')}
            data-filter="generic_category"
            id={category}
          >
            {category}
          </li>
        ))}
      </ul>

      <ul className={styles.categories}>
        {[
          'all',
          'html',
          'css',
          'javascript',
          'three js',
          'leaflet',
          'react',
          'java',
          'luciadlightspeed',
          'arcgis pro',
          'adobe photoshop',
          'adobe illustrator',
        ].map((category) => (
          <li
            key={category}
            className={`${styles.category} ${
              isCategoryActive(category, 'category_tech') && styles.active
            }`}
            onClick={() => handleCategoryChange(category, 'category_tech')}
            data-filter="category_tech"
            id={category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
      <div className={styles.portfolio}>
        {PORTFOLIO_ITEMS.map((item, index) => {
          const dataSpecCorrect = item.dataSpec.includes(currentTechCategory);
          const dataGenCorrect = item.dataGen.includes(currentGenericCategory);
          const elementVisible = dataSpecCorrect && dataGenCorrect;

          return elementVisible ? (
            <PortfolioItem
              key={index}
              navigateTo={item.navigateTo}
              dataSpec={item.dataSpec}
              dataGen={item.dataGen}
              dataAttribute={item.dataAttribute}
              srcImg={item.srcImg}
              altImg={item.altImg}
              coverText={item.coverText}
              date={item.date}
            />
          ) : null;
        })}
      </div>
    </section>
  );
}

export default MyWork;
