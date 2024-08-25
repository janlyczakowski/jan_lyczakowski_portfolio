import * as d3 from 'd3'; // we will need d3.js
import DataFetcher from '../utils/DataFetcher';

function Map() {
  let allSvgPaths = null;
  // set up scale, centere of the map and projection
  const projection = d3.geoConicEqualArea().scale(2000).center([10, 50]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const { data, loading } = DataFetcher(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  );

  if (data) {
    allSvgPaths = data.features
      .filter(
        (shape) =>
          shape.properties.name === 'Poland' ||
          shape.properties.name === 'Germany' ||
          shape.properties.name === 'Italy' ||
          //       shape.properties.name === 'Denmark' ||
          //       shape.properties.name === 'Lithuania' ||
          //       shape.properties.name === 'Russia' ||
          //       shape.properties.name === 'France' ||
          shape.properties.name === 'Austria' ||
          shape.properties.name === 'Belgium'
        //       shape.properties.name === 'Spain' ||
        //       shape.properties.name === 'Portugal' ||
      )
      .map((shape) => {
        return (
          <path
            key={shape.id}
            d={geoPathGenerator(shape)}
            stroke="lightGrey"
            strokeWidth={1}
            fill="white"
            fillOpacity={0.1}
          />
        );
      });
    console.log(allSvgPaths);
  }
  console.log(allSvgPaths);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <svg width={'100vw'} height={'100vh'}>
            {allSvgPaths}
          </svg>
        </div>
      )}
    </>
  );
}

export default Map;
