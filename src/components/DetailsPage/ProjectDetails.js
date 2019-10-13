import React from "react";

const ProjectDetails = () => {
  return (
    <div className="wrappy">
      <div className="wrap">
        <div>category</div>
        <div>title</div>
      </div>
      <div className="wrap2">
        <div>tagline</div>
        <div className="project-card__icon-info-outer-wrap">
          <div className="project-card__icon-info-individual-wrap">
            <object
              className="project-card__svg--white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              type="image/svg+xml"
              data="./statics/age-icon.svg"
              fill="none"
            ></object>
            <p>Age</p>
            <div>minimum_age-maximum_age</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <object
              className="project-card__svg--white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              type="image/svg+xml"
              data="./statics/group-size-icon.svg"
            ></object>
            <p>Group Size</p>
            <div>group_size</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <object
              className="project-card__svg--white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              type="image/svg+xml"
              data="./statics/duration-icon.svg"
            ></object>
            <p>Duration</p>
            <div>session_duration_hours hours</div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <object
              className="project-card__svg--white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              type="image/svg+xml"
              data="./statics/calendar-icon.svg"
            ></object>
            <p>Repeats</p>
            <div>session_frequency_per_week a week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
