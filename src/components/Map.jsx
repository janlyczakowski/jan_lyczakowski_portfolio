import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import DataFetcher from '../utils/DataFetcher';
import styles from '../css/AboutMe.module.css';

function Map() {
  let allSvgPaths = null;
  const [mapScale, setMapScale] = useState(0);
  const [mapCenter, setMapCenter] = useState(0);
  const [maskSettings, setMaskSettings] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const visitedCountries = ['Poland', 'Germany', 'Italy', 'Austria', 'Belgium'];
  // set up scale, centere of the map and projection
  const projection = d3.geoConicEqualArea().scale(mapScale).center(mapCenter);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const { data, loading } = DataFetcher(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  );

  useEffect(() => {
    // adjust map scale, map center and mask on differnt screen sizes
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '0%', width: '100%', height: '100%' });
      } else if (window.innerWidth >= 550) {
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
      } else if (window.innerWidth >= 500) {
        setMapScale(2200);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
      } else if (window.innerWidth >= 450) {
        setMapScale(2400);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
      } else if (window.innerWidth >= 390) {
        setMapScale(2700);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
      } else {
        setMapScale(3000);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
      }
    };

    handleResize(); // Call once to set initial values
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (data) {
    allSvgPaths = data.features
      // .filter(
      //   (shape) =>
      //     shape.properties.name === 'Poland' ||
      //     shape.properties.name === 'Germany' ||
      //     shape.properties.name === 'Italy' ||
      //     shape.properties.name === 'Austria' ||
      //     shape.properties.name === 'Belgium'
      // )
      .map((shape) => {
        // console.log(shape.properties.name);
        return (
          <path
            key={shape.id}
            d={geoPathGenerator(shape)}
            stroke={
              visitedCountries.includes(shape.properties.name)
                ? '#174538'
                : '#d7d7d7'
            }
            strokeWidth={1}
            // strokeOpacity={0.3}
            fill={
              visitedCountries.includes(shape.properties.name)
                ? '#174538'
                : 'none'
            }
            // fill={'none'}
            fillOpacity={0.1}
            // onMouseEnter={(e) => {
            //   d3.select(e.target).style('fill', 'red');
            // }}
            // onMouseLeave={(e) => {
            //   d3.select(e.target).style('fill', 'none');
            // }}
          />
        );
      });
  }
  return (
    <div className={styles.map_container}>
      {loading ? (
        <h2 className={styles.loading_text}>
          Hold on!
          <br />
          We're drawing the map...
        </h2>
      ) : (
        <div className={styles.svg_container}>
          <svg
            width={'100%'}
            height={'100%'}
            viewBox="0 0 800 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="filter">
                <feGaussianBlur stdDeviation="100" />
              </filter>
              <mask id="mask">
                <rect
                  x={maskSettings.x}
                  y={maskSettings.y}
                  width={maskSettings.width}
                  height={maskSettings.height}
                  fill="#fffbf7"
                  filter="url(#filter)"
                ></rect>
              </mask>
            </defs>
            <g mask="url(#mask)">{allSvgPaths}</g>
            {/* {allSvgPaths} */}
          </svg>
        </div>
      )}
    </div>
  );
}

export default Map;
