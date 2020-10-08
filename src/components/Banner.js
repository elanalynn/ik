import React from 'react';

const Banner = ({ bgColor, children, position }) => (
  <section className={`banner bg-${bgColor} ${position}`}>{children}</section>
);

export default Banner;
