import React from "react";
import { Link } from "react-router-dom";
import dishes from "./data";

const ProjectCards = () => {
  const dishItems = dishes.map(dishItems => (
    <li key={dishItems.id} className="project-card">
      <p>{dishItems.category}</p>
      <h2>{dishItems.title}</h2>
      <div className="wrappy">
        <div className="wrap">
          <p>Age</p>
          <div>
            {dishItems.minimum_age}-{dishItems.maximum_age}
          </div>
        </div>
        <div className="wrap">
          <p>Group Size</p>
          <div>{dishItems.group_size}</div>
        </div>
        <div className="wrap">
          <p>Duration</p>
          <div>{dishItems.session_duration_hours} hours</div>
        </div>
        <div className="wrap">
          <p>Repeats</p>
          <div>{dishItems.session_frequency_per_week} a week</div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="">
        {dishItems.length ? (
          dishItems
        ) : (
          <li className="project-card">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default ProjectCards;
