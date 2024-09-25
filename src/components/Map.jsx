import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import DataFetcher from '../utils/DataFetcher';
import styles from '../css/AboutMe.module.css';
import { pointsData } from '../utils/cities';
import AnimatedMarker from './AnimatedMarker';
import AnimatedPath from './AnimatedPath';
import AnimatedPopup from './AnimatedPopup';

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
  const markerRef = useRef(null);
  const svgRef = useRef(null);
  const activePathRef = useRef(null);
  const popupRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState({ top: 0, left: 0 });
  const [popupPosition, setPopupPosition] = useState({
    vertical: 'below',
    horizontal: 'left',
  });
  const [popupMode, setPopupMode] = useState('mobile');
  const [popupMargin, setPopupMargin] = useState({
    markerAbove: 0,
    markerBelow: 0,
  });

  // set up scale, centere of the map and projection
  const projection = d3.geoConicEqualArea().scale(mapScale).center(mapCenter);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const { data, loading } = DataFetcher(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  );

  useEffect(() => {
    // adjust map scale, map center and mask on differnt screen sizes
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setPopupMode('pc');
        setMapScale(1700);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '0%', width: '100%', height: '100%' });
        setMarkerSize(1.25);
      } else if (window.innerWidth >= 800) {
        setPopupMode('pc');
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '0%', width: '100%', height: '100%' });
        setMarkerSize(1.25);
      } else if (window.innerWidth >= 550) {
        setPopupMode('pc');
        setMapScale(2000);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.25);
      } else if (window.innerWidth >= 500) {
        setPopupMode('pc');
        setMapScale(2200);
        setMapCenter([17, 50]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.5);
      } else if (window.innerWidth >= 450) {
        setPopupMode('mobile');
        setMapScale(2400);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.5);
      } else if (window.innerWidth >= 390) {
        setPopupMode('mobile');
        setMapScale(2700);
        setMapCenter([16, 49]);
        setMaskSettings({ x: '0%', y: '-25%', width: '100%', height: '150%' });
        setMarkerSize(1.75);
      } else {
        setPopupMode('mobile');
        setMapScale(2900);
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

  useEffect(() => {
    if (markerRef.current && svgRef.current) {
      const markerRect = markerRef.current.getBoundingClientRect();
      const svgRect = svgRef.current.getBoundingClientRect();

      // Calculate the relative position of the marker within the SVG
      const relativeTop = markerRect.top - svgRect.top;
      const relativeLeft = markerRect.left - svgRect.left;

      setMarkerPosition({ top: relativeTop, left: relativeLeft });

      // Determine whether to place the popup above or below the marker
      if (relativeTop < svgRect.height / 2) {
        if (relativeLeft < svgRect.width / 2) {
          setPopupPosition({ vertical: 'below', horizontal: 'right' });
        } else {
          setPopupPosition({ vertical: 'below', horizontal: 'left' });
        }
      } else {
        if (relativeLeft < svgRect.width / 2) {
          setPopupPosition({ vertical: 'above', horizontal: 'right' });
        } else {
          setPopupPosition({ vertical: 'above', horizontal: 'left' });
        }
      }

      // Get the height of the active path
      if (activePathRef.current && popupRef.current) {
        const bboxPath = activePathRef.current.getBoundingClientRect();
        const bboxPopup = popupRef.current.getBoundingClientRect();

        const lowermostPosition = bboxPath.height + bboxPath.y + 30;
        const uppermostPosition = bboxPath.y - bboxPopup.height - 30;
        setPopupMargin({
          markerAbove: lowermostPosition,
          markerBelow: uppermostPosition,
        });
      }
    }
  }, [activeCity, data]);

  if (data) {
    // combine layer of countries with custom layer of points
    const mergedData = combineGeoJSON(data, pointsData);

    // Render all coutries
    boundaries = mergedData.features
      .filter(
        (shape) =>
          shape.geometry.type === 'Polygon' ||
          shape.geometry.type === 'MultiPolygon'
      )
      .map((shape) => {
        return (
          <path
            key={shape.id}
            d={geoPathGenerator(shape)}
            stroke={'#d7d7d7'}
            strokeWidth={1}
            fill={'none'}
            fillOpacity={0.1}
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
          <AnimatedPath
            key={shape.id}
            shape={shape}
            geoPathGenerator={geoPathGenerator}
            activeCity={activeCity}
            activePathRef={activePathRef}
          />
        );
      });

    // Render points
    points = mergedData.features
      .filter((shape) => shape.geometry.type === 'Point')
      .map((shape) => {
        const [x, y] = projection(shape.geometry.coordinates);
        return (
          <AnimatedMarker
            key={shape.id}
            x={x}
            y={y}
            markerSize={markerSize}
            shape={shape}
            activeCity={activeCity}
            cities={cities}
            markerRef={markerRef}
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
            ref={svgRef}
          >
            <defs>
              <filter id="filter">
                <feGaussianBlur stdDeviation="50" />
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
            </defs>
            <g mask="url(#mask)">
              {boundaries} {activeCountryBoundary} {points}
            </g>
          </svg>
          <AnimatedPopup
            activeCity={activeCity}
            cities={cities}
            popupRef={popupRef}
            markerPosition={markerPosition}
            popupMode={popupMode}
            popupPosition={popupPosition}
            popupMargin={popupMargin}
          />
        </div>
      )}
    </div>
  );
}

export default Map;
