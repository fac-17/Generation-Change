import React from "react";
import { Link } from "react-router-dom";
import Svg from "../Universal/Svg";

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
          <Svg height="18" width="24" icon="age" />
          <p>Age</p>
          <div>
            {project.fields.minimum_age}-{project.fields.maximum_age}
          </div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <Svg height="18" width="24" icon="group-size" />
          <p>Group Size</p>
          <div>{project.fields.group_size}</div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <Svg height="21" width="23" icon="duration" />
          <object
            className="project-card__svg"
            type="image/svg+xml"
            data="./statics/duration-icon.svg"
          ></object>
          <p>Duration</p>
          <div>{project.fields.session_duration_hours} hours</div>
        </div>

        <div className="project-card__icon-info-individual-wrap">
          <Svg height="20" width="20" icon="calendar" />
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
