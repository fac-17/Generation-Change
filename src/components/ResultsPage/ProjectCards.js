import React from "react";
import { Link } from "react-router-dom";
import Svg from "../Universal/Svg";
import Loading from "../Universal/Loading";

const ProjectCards = ({ setDetailsData, sortedListings, data }) => {
  if (!data) {
    return <Loading />;
  }

  const project = sortedListings.map((project, i) => (
    <li key={i} className="project-card">
      <img
        className="project-card__image"
        src={project.fields.photo_1}
        alt="story"
      />
      <div className="project-card__inner-wrap">
        <p className="project-card__category">{project.fields.category}</p>
        <Link to={{ pathname: "/details" }}>
          <p
            className="project-card__title"
            onClick={() => {
              setDetailsData(project);
            }}
          >
            {project.fields.title}
          </p>
        </Link>
        <div className="project-card__icon-info-outer-wrap">
          <div
            className="project-card__icon-info-individual-wrap"
            id="icon-age"
          >
            <Svg height="25" width="24" icon="age" />
            <p>Age</p>
            <div>
              {project.fields.minimum_age}
              {project.fields.maximum_age === 0
                ? "+"
                : " - " + project.fields.maximum_age}
            </div>
          </div>

          <div
            className="project-card__icon-info-individual-wrap"
            id="icon-group-size"
          >
            <Svg height="18" width="24" icon="group-size" />
            <p>Group Size</p>
            <div>
              {project.fields.group_size === 0
                ? "Any"
                : project.fields.group_size}
            </div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg height="21" width="23" icon="duration" />
            <p>Duration</p>
            <div>
              {project.fields.session_duration_hours === 0
                ? "Any"
                : project.fields.session_duration_hours + " hours"}
            </div>
          </div>

          <div className="project-card__icon-info-individual-wrap">
            <Svg height="20" width="20" icon="calendar" />
            <p>Repeats</p>
            <div>
              {project.fields.session_frequency_per_week === 0
                ? "Anytime"
                : project.fields.session_frequency_per_week + " times a week"}
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <ul>{project.length ? project : <li>No results found</li>}</ul>
    </div>
  );
};

export default ProjectCards;
