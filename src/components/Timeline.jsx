import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useMediaQuery } from '@mui/material';
import styles from '../css/AboutMe.module.css';

function Timeline(props) {
  const { cities, activeCity, setActiveCity } = props;
  const listRef = useRef(null);
  // initial values 2 times single offset
  const [offset, setOffset] = useState(92);
  const tablet_screen = useMediaQuery('(min-width:800px)');
  // const pc_screen = useMediaQuery('(min-width:1200px)');

  function onSliderChange(e, value) {
    setActiveCity(cities.find((city) => value === city.value));
  }
  function onCityClickHandler(e, city) {
    if (listRef.current && activeCity.id !== city.id) {
      const activeIndex = cities.findIndex((c) => c.id === activeCity.id);
      const targetIndex = cities.findIndex((c) => c.id === city.id);
      const activeItem = listRef.current.children[activeIndex];
      const targetItem = listRef.current.children[targetIndex];

      console.log(activeItem);
      console.log(targetItem);

      const activeItemHeight = activeItem.clientHeight;
      const targetItemHeight = targetItem.clientHeight;

      const itemsToSkip = Math.abs(targetIndex - activeIndex);
      const finalOffset =
        (activeItemHeight / 2 - targetItemHeight / 2 + targetItemHeight) *
        itemsToSkip;
      console.log(finalOffset);
      if (activeCity.id < city.id) {
        setOffset((prev) => prev - finalOffset);
      } else {
        setOffset((prev) => prev + finalOffset);
      }

      setActiveCity(city);
    }
  }
  useEffect(() => {
    if (activeCity && listRef.current) {
      listRef.current.style.transform = `translateY(${offset}px)`;
    }
    // if (pc_screen) {
    //   console.log('media query applied');
    //   setOffset(92); //2 times single offset
    // }
  }, [activeCity, cities]);

  return (
    <div className={styles.slider_container}>
      <p className={styles.year_counter}>{activeCity.time}</p>
      {/* Mobile version */}
      <Box
        sx={{
          display: tablet_screen ? 'none' : 'block',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '0 1em',
        }}
      >
        <Slider
          aria-label="Restricted values"
          onChange={(e, value) => onSliderChange(e, value)}
          step={null}
          marks={cities}
          sx={{
            color: '#174538',
            '& .MuiSlider-thumb': {
              width: '15px',
              height: '15px',
            },
            '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover ': {
              boxShadow: '0px 0px 0px 8px rgba(23, 69, 56, 0.16)',
            },
          }}
        />
      </Box>
      <p className={styles.active_city}>{activeCity.name}</p>

      {/* PC version */}

      <div className={styles.timeline_container}>
        <div className={styles.mask}>
          <ul className={styles.timeline_list} ref={listRef}>
            {cities.map((city, index) => (
              <li
                key={index}
                className={styles.timeline_item}
                onClick={(e) => onCityClickHandler(e, city)}
              >
                <p
                  className={
                    city.id === activeCity.id
                      ? `${styles.timeline_item_name} ${styles.active_item}`
                      : styles.timeline_item_name
                  }
                >
                  {city.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
