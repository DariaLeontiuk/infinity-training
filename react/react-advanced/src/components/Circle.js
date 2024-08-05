import React from 'react';

const Circle = ({ radius, color }) => (
  <svg width={radius * 2} height={radius * 2}>
    <circle cx={radius} cy={radius} r={radius} fill={color} />
  </svg>
);

export default Circle;