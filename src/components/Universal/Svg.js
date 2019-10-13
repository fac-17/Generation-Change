import React from "react";

const Svg = ({ icon, height, width, color = "" }) => {
  return (
    <object
      className={`project-card__svg${color}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      type="image/svg+xml"
      data={`./statics/${icon}-icon.svg`}
      fill="none"
    ></object>
  );
};

export default Svg;
