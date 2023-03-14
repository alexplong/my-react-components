/** @format */

import React from "react";

const Screen = ({ image, id, alt }) => {
  return (
    <div className="screen">
      <div
        className="screen--image"
        id={id}
        style={{ backgroundImage: `url(${image})` }}
        alt={alt}
      />
      <div className="screen--overlay"></div>
    </div>
  );
};

export default Screen;
