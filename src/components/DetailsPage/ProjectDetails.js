import React from "react";
import Svg from "../Universal/Svg";

const ProjectDetails = ({ detailsData }) => {
  if (!detailsData) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="project-short-summary">
      <div className="project-title-cat">
        <div className="project-title-cat__category">
          {detailsData.fields.category}
        </div>
        <div className="project-title-cat__title">
          {detailsData.fields.title}
        </div>
        <div className="project-bulletpoints__tagline">
          {detailsData.fields.tagline.endsWith(".")
            ? detailsData.fields.tagline
            : detailsData.fields.tagline + "."}
        </div>
      </div>
      <div className="project-bulletpoints">
        <div className="project-card__icon-info-outer-wrap">
          <div className="project-card__icon-info-individual-wrap">
            <Svg
              className="project-card__svg"
              color="--white"
              height="20"
              width="20"
              icon="age"
            />
            <p>Age</p>
            <div>
              {detailsData.fields.minimum_age}
              {detailsData.fields.maximum_age === 0
                ? "+"
                : " - " + detailsData.fields.maximum_age}
            </div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="group-size" />
            <p>Group Size</p>
            <div>
              {detailsData.fields.group_size === 0
                ? "Any"
                : detailsData.fields.group_size}
            </div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="duration" />
            <p>Duration</p>
            <div>
              {detailsData.fields.session_duration_hours === 0
                ? "Any duration"
                : detailsData.fields.session_frequency_per_week + " hours"}
            </div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg color="--white" height="20" width="20" icon="calendar" />
            <p>Repeats</p>
            <div>
              {detailsData.fields.session_frequency_per_week === 0
                ? "Anytime"
                : detailsData.fields.session_frequency_per_week +
                  " times a week"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
