import { useSpring, animated } from '@react-spring/web';

function AnimatedPath(props) {
  const { shape, geoPathGenerator, activePathRef } = props;

  const pathAnimation = useSpring({
    config: {
      duration: 1000,
    },
    from: {
      fill: 'transparent',
      fillOpacity: 0,
      stroke: 'transparent',
    },
    to: {
      fill: '#174538',
      stroke: '#174538',
      fillOpacity: 0.1,
    },
  });

  return (
    <animated.path
      ref={activePathRef}
      key={shape.id}
      style={pathAnimation}
      d={geoPathGenerator(shape)}
      stroke={'#174538'}
      strokeWidth={2}
    />
  );
}

export default AnimatedPath;
