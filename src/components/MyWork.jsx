import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

import { PORTFOLIO_ITEMS } from '../utils/constants';
import styles from '../css/MyWork.module.css';

function MyWork() {
  // Initial categories
  const categories = ['software development', 'static maps'];

  // Initialize state with all categories active
  const initialActiveCategories = {};
  categories.forEach((category) => {
    initialActiveCategories[category] = true;
  });

  const [activeCategories, setActiveCategories] = useState(
    initialActiveCategories
  );
  const [clickedCategory, setClickedCategory] = useState(null);

  // Toggle active status of a category
  const toggleCategory = (category) => {
    setActiveCategories((prevState) => {
      const newState = { ...prevState, [category]: !prevState[category] };
      // Ensure at least one category remains active
      const activeCount = Object.values(newState).filter(Boolean).length;
      if (activeCount === 0) {
        newState[category] = true;
      }
      return newState;
    });
    setClickedCategory(category);
  };
  // Check if there is at least one other active category
  const hasOtherActiveCategories = (category) => {
    return (
      Object.values(activeCategories).filter((isActive, index) => {
        const currentCategory = categories[index];
        return isActive && currentCategory !== category;
      }).length > 0
    );
  };

  // Handle mouse leave to reset clicked state
  const handleMouseLeave = () => {
    setClickedCategory(null);
  };

  return (
    <section id={styles['work']}>
      <h2 className={'section_title'}>Selected work</h2>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li
            key={category}
            className={`${styles.category} ${
              activeCategories[category] ? styles.active : styles.inactive
            } ${
              activeCategories[category] && hasOtherActiveCategories(category)
                ? styles.canHover
                : ''
            } ${clickedCategory === category ? styles.clicked : ''}`}
            onClick={() => toggleCategory(category)}
            onMouseLeave={handleMouseLeave}
            id={styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`]}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className={styles.projects_container}>
        {PORTFOLIO_ITEMS.filter((item) => activeCategories[item.category]).map(
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
