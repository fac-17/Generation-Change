import React from "react";

const ImageContainer = ({ detailsData }) => {
  if (!detailsData) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="project-image-flex">
      <div>
        <img src={detailsData.fields.photo_1} alt="story"/>
      </div>
      <div className="project-image-flex__small-photos">
        <img src={detailsData.fields.photo_2} alt="story"/>
        <img src={detailsData.fields.photo_3} alt="story"/>
      </div>
      <div className="project-image-flex__small-photos">
        <img src={detailsData.fields.photo_4} alt="story"/>
        <img src={detailsData.fields.photo_5} alt="story"/>
      </div>
    </div>
  );
};

export default ImageContainer;
