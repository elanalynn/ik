import React, { useState } from 'react';

const OriginalTag = () => {
  const [info, setInfo] = useState(false);

  return (
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    <div
      className="original-tag"
      onMouseOver={() => setInfo(true)}
      onFocus={() => setInfo(true)}
      onMouseOut={() => setInfo(false)}
      onBlur={() => setInfo(false)}
      role="alert"
    >
      {info ? (
        <div>
          <p>Contact</p>
          <p>for price</p>
        </div>
      ) : (
        <div>
          <p>Original</p>
          <p>Available</p>
        </div>
      )}
    </div>
  );
};

export default OriginalTag;
