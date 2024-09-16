import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import DataFetcher from '../utils/DataFetcher';
import styles from '../css/AboutMe.module.css';
import { pointsData } from '../utils/cities';

function combineGeoJSON(geojson1, geojson2) {
  return {
    type: 'FeatureCollection',
    features: [...geojson1.features, ...geojson2.features],
  };
}

function Map(props) {
  const { activeCity, cities } = props;
  let boundaries = null;
  let activeCountryBoundary;
  let points = null;
  const [mapScale, setMapScale] = useState(0);
  const [mapCenter, setMapCenter] = useState(0);
  const [maskSettings, setMaskSettings] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [markerSize, setMarkerSize] = useState(1);
  // const visitedCountries = ['Poland', 'Germany', 'Italy', 'Austria', 'Belgium'];
  // set up scale, centere of the map and projection
  const projection = d3.geoConicEqualArea().scale(mapScale).center(mapCenter);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const { data, loading } = DataFetcher(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  );

  useEffect(() => {
    // adjust map scale, map center and mask on differnt screen sizes
    const handleResize = () => {
      // if (window.innerWidth >= 1400) {
      //   setMarkerSize(1);
      // } else
      if (window.innerWidth >= 800) {
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '0%', width: '100%', height: '100%' });
        setMarkerSize(1.25);
      } else if (window.innerWidth >= 550) {
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.25);
      } else if (window.innerWidth >= 500) {
        setMapScale(2200);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.5);
      } else if (window.innerWidth >= 450) {
        setMapScale(2400);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.5);
      } else if (window.innerWidth >= 390) {
        setMapScale(2700);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.75);
      } else {
        setMapScale(3000);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(2.25);
      }
    };

    handleResize(); // Call once to set initial values
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (data) {
    // combine layer of countries with custom layer of points
    const mergedData = combineGeoJSON(data, pointsData);

    // Render all coutnries except the active country
    boundaries = mergedData.features
      .filter(
        (shape) =>
          (shape.geometry.type === 'Polygon' ||
            shape.geometry.type === 'MultiPolygon') &&
          shape.properties.name !== activeCity.country
        // shape.properties.name === 'Poland' ||
        // shape.properties.name === 'Germany' ||
        // shape.properties.name === 'Italy' ||
        // shape.properties.name === 'Austria' ||
        // shape.properties.name === 'Belgium'
      )
      .map((shape) => {
        // console.log(shape.properties.name);
        console.log(activeCity);
        console.log(shape.properties.name);
        return (
          <path
            key={shape.id}
            d={geoPathGenerator(shape)}
            stroke={
              activeCity.country === shape.properties.name
                ? '#174538'
                : '#d7d7d7'
            }
            strokeWidth={1}
            // fill={
            //   activeCity.country === shape.properties.name ? '#174538' : 'none'
            // }
            fill={'none'}
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

    // Render the active country separately
    activeCountryBoundary = mergedData.features
      .filter(
        (shape) =>
          (shape.geometry.type === 'Polygon' ||
            shape.geometry.type === 'MultiPolygon') &&
          shape.properties.name === activeCity.country
      )
      .map((shape) => {
        return (
          <path
            key={shape.id}
            d={geoPathGenerator(shape)}
            stroke={'#174538'}
            strokeWidth={2}
            fill={'#174538'}
            fillOpacity={0.1}
            // filter="url(#dro p-shadow-country)"
          />
        );
      });

    // Render points
    points = mergedData.features
      .filter((shape) => shape.geometry.type === 'Point')
      .map((shape) => {
        console.log(shape);
        const [x, y] = projection(shape.geometry.coordinates);
        return (
          <path
            d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z"
            // fill="rgb(189, 237, 31)"
            fill={
              activeCity.name === shape.properties.city ? '#174538' : 'none'
            }
            className={styles.markers}
            transform={`translate(${x - 15 * markerSize}, ${
              y - 20 * markerSize
            }) scale(${markerSize})`} // Adjust the translation to center the path
            filter="url(#drop-shadow-point)"
          />

          // <circle
          //   key={shape.id}
          //   cx={x}
          //   cy={y}
          //   r={6}
          //   fill={
          //     activeCity.name === shape.properties.city ? '#7c33fa' : 'none'
          //   }
          //   filter="url(#drop-shadow)"
          // />
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
              <filter
                id="drop-shadow-point"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="3"
                  floodColor="rgb(95, 95, 95)"
                  floodOpacity="0.5"
                />
              </filter>
              <filter
                id="drop-shadow-country"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="4"
                  floodColor="#000000"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>
            <g mask="url(#mask)">
              {boundaries} {activeCountryBoundary} {points}
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export default Map;
