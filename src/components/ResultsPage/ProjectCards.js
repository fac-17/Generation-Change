import React from "react";
import { Link } from "react-router-dom";

const ProjectCards = ({ listingsWithinXDistance, data }) => {
  if (!data) {
    return <h1>...loading</h1>;
  }
  console.log(
    "projects within distance data in projectcards.js",
    listingsWithinXDistance
  );
  const project = listingsWithinXDistance.map((project, i) => (
    <li key={i} className="project-card">
      <img src={project.photo_1} />
      <p className="project-card__category">{project.fields.category}</p>
      <p className="project-card__title">{project.fields.title}</p>
      <div className="project-card__icon-info-outer-wrap">
        <div className="project-card__icon-info-individual-wrap">
          <object
            className="project-card__svg"
            type="image/svg+xml"
            data="./statics/age-icon.svg"
            fill="none"
          ></object>
          <p>Age</p>
          <div>
            {project.fields.minimum_age}-{project.fields.maximum_age}
          </div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <object
            className="project-card__svg"
            type="image/svg+xml"
            data="./statics/group-size-icon.svg"
          ></object>
          <p>Group Size</p>
          <div>{project.fields.group_size}</div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <object
            className="project-card__svg"
            type="image/svg+xml"
            data="./statics/duration-icon.svg"
          ></object>
          <p>Duration</p>
          <div>{project.fields.session_duration_hours} hours</div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <object
            className="project-card__svg"
            type="image/svg+xml"
            data="./statics/calendar-icon.svg"
          ></object>
          <p>Repeats</p>
          <div>{project.fields.session_frequency_per_week} a week</div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="container__projects">
        <Link to={{ pathname: "/details" }}>
          {project.length ? (
            project
          ) : (
            <li className="project-card">No results found</li>
          )}
        </Link>
      </ul>
    </div>
  );
};

export default ProjectCards;
