import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Credits.module.css';
import '../css/index.css';

const CreditsItem = ({ imgSrc, altText, title, sourceLink, sourceText }) => {
  return (
    <li
      className={`${styles.list_element} ${styles.list_element_certification}`}
    >
      <div>
        <img
          className={`${styles.list_element_img} ${styles.certificate_img} ${styles.credit_image}`}
          src={imgSrc}
          alt={altText}
        />
      </div>
      <div
        className={`${styles.list_element_description} ${styles.certificate_description}`}
      >
        <p className={styles.element_title}>{title}</p>

        {typeof sourceLink !== 'undefined' && (
          <p className={`${styles.center} ${styles.place}`}>
            <i>
              Source:
              <a
                href={sourceLink}
                className={styles.source_link}
                target="_blank"
                rel="noreferrer"
              >
                {sourceText}
              </a>
            </i>
          </p>
        )}
      </div>
    </li>
  );
};

CreditsItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CreditsItem;
