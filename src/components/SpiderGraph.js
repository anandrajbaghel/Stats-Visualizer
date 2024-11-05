// src/components/SpiderGraph.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SpiderGraph = ({ playerData }) => {
  const cx = 150; // Center X
  const cy = 150; // Center Y
  const r = 100;  // Radius for the regular pentagon
  const n = 5;    // Number of sides for a pentagon

  const maxValues = { xp: 100, health: 100, score: 100, level: 20, shield: 100 }; // Max values for scaling

  // Function to calculate points
  const calculateDataPolygon = (data) => {
    return Array.from({ length: n }).map((_, i) => {
      const key = Object.keys(maxValues)[i];
      const scale = data ? data[key] / maxValues[key] : 0; // Scale the data value
      const angle = (i * 360 / n) * (Math.PI / 180); // Convert to radians
      const x = cx + scale * r * Math.cos(angle);
      const y = cy + scale * r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  // Animated polygon points
  const { points } = useSpring({
    points: playerData ? calculateDataPolygon(playerData) : calculateDataPolygon(null),
    config: { tension: 120, friction: 14 }, // Adjust animation properties as needed
  });

  const regularPolygonPoints = Array.from({ length: n }).map((_, i) => {
    const angle = (i * 360 / n) * (Math.PI / 180);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      {/* Regular Pentagon */}
      <polygon points={regularPolygonPoints} fill="none" stroke="#3a3a6b" strokeWidth="2" />
      
      {/* Data Polygon with animation */}
      {playerData && (
        <animated.polygon points={points} fill="rgba(57, 255, 20, 0.5)" stroke="#39ff14" strokeWidth="2" />
      )}
      
      {/* Draw the centroid */}
      <circle cx={cx} cy={cy} r="2" fill="#28284e" />
    </svg>
  );
};

export default SpiderGraph;
