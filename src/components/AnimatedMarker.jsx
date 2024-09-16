import { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../css/AboutMe.module.css';

function AnimatedMarker(props) {
  const { x, y, markerSize, shape, activeCity, cities, markerRef } = props;
  const isActive = activeCity.name === shape.properties.city;

  const pointAnimation = useSpring({
    config: {
      // duration: 500,
      tension: 500,
      mass: 2,
      velocity: 0,
    },
    delay: 1000,
    from: {
      transform: `translate(${x - 15 * markerSize + 15}px, ${
        y - 20 * markerSize + 20
      }px) scale(0)`,
    },
    to: {
      transform: isActive
        ? `translate(${x - 15 * markerSize}px, ${
            y - 20 * markerSize
          }px) scale(${markerSize})`
        : `translate(${x - 15 * markerSize + 15}px, ${
            y - 20 * markerSize + 20
          }px) scale(0)`,
    },
  });

  if (!isActive) {
    return null; // Do not render anything if it's not the active city
  }
  return (
    <>
      <animated.path
        ref={markerRef}
        style={pointAnimation}
        d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z"
        fill={'#174538'}
        filter="url(#drop-shadow-point)"
      />
    </>
  );
}

export default AnimatedMarker;
