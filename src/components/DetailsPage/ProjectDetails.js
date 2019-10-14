import React from "react";
import Svg from "../Universal/Svg";

const ProjectDetails = ({detailsData}) => {
  if (!detailsData) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="project-short-summary-grid">
      <div className="project-title-cat">
        <div>{detailsData.fields.category}</div>
        <div>{detailsData.fields.title}</div>
      </div>
      <div className="project-bulletpoints">
        <div>tagline</div>
        <div className="project-card__icon-info-outer-wrap">
          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="age" />
            <p>Age</p>
            <div>{detailsData.fields.minimum_age}-{detailsData.fields.maximum_age}</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="group-size" />
            <p>Group Size</p>
            <div>{detailsData.fields.group_size}</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="duration" />
            <p>Duration</p>
            <div>{detailsData.fields.session_duration_hours} hours</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="calendar" />
            <p>Repeats</p>
            <div>{detailsData.fields.session_frequency_per_week} a week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
