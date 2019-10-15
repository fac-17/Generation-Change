import React from "react";

const ImageContainer = ({ detailsData }) => {
  if (!detailsData) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="project-image-flex">
      <div>
        <img src={detailsData.fields.photo_1} />
      </div>
      <div className="project-image-flex__small-photos">
        <img src={detailsData.fields.photo_2} />
        <img src={detailsData.fields.photo_3} />
      </div>
      <div className="project-image-flex__small-photos">
        <img src={detailsData.fields.photo_4} />
        <img src={detailsData.fields.photo_5} />
      </div>
    </div>
  );
};

export default ImageContainer;
