import { useEffect } from 'react';
import styles from '../css/AboutMe.module.css';
import { animated, useSpring } from '@react-spring/web';

function AnimatedPopup(props) {
  const {
    activeCity,
    cities,
    popupRef,
    markerPosition,
    popupMode,
    popupPosition,
    popupMargin,
  } = props;

  const popupStyles = {
    visibility:
      markerPosition.top === 0 && markerPosition.left === 0
        ? 'hidden'
        : 'visible',

    ...(popupMode === 'mobile' && {
      bottom: popupPosition.vertical === 'below' ? '20px' : 'auto',
      top: popupPosition.vertical === 'above' ? '95px' : 'auto',
      left: '50%',
    }),
    ...(popupMode === 'pc' && {
      top:
        popupPosition.vertical === 'below'
          ? `${popupMargin.markerAbove}px`
          : `${popupMargin.markerBelow}px`,
      left: `${markerPosition.left}px`,
      transform: `translateX(${
        popupPosition.horizontal === 'left' ? '-100%' : '0'
      })`,
    }),
  };

  const [popupAnimation, api] = useSpring(() => ({
    config: {
      duration: 2000,
    },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }));

  useEffect(() => {
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      reset: true,
    });
  }, [activeCity, api]);

  return (
    <animated.div
      className={styles.popup}
      style={{ ...popupStyles, ...popupAnimation }}
      ref={popupRef}
    >
      <p className={styles.popup_text}>
        {cities.find((city) => city.id === activeCity.id).text}
      </p>
    </animated.div>
  );
}

export default AnimatedPopup;
