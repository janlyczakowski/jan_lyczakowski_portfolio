import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../css/MyProject.module.css';
import { useSwipeable } from 'react-swipeable';

function Carousel(props) {
  console.log('carousel rendered');
  const { altImg, images, category } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  return (
    <div className={styles.carousel}>
      <div className={styles.picture_container} {...swipeHandlers}>
        <img
          src={images[currentIndex]}
          // key={currentIndex}
          className={styles.project_picture}
          alt={altImg}
        />
        <div className={styles.left} onClick={handlePrevious}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`${styles.arrow} ${[
              styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
            ]}`}
          />
        </div>
        <div className={styles.right} onClick={handleNext}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`${styles.arrow} ${[
              styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
            ]}`}
          />
        </div>
      </div>
      <div className={styles.indicator}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ''
            } ${[
              styles[`${category.split(' ')[0]}_${category.split(' ')[1]}`],
            ]}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
