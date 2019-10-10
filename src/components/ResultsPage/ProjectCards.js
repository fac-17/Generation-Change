import React from "react";
import { Link } from "react-router-dom";
import dishes from "./data";

const ProjectCards = () => {
  const dishItems = dishes.map(dishItems => (
    <li key={dishItems.id} className="project-card">
      <h3>{dishItems.name}</h3>
      {dishItems.description && <p>{dishItems.description}</p>}
      <div>£{dishItems.price.toFixed(2)}</div>
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

// return (
//   <div>
//     <Link to={{ pathname: "/details" }}>
//       <ul className="">
//         {data.length ? (
//           data.category
//           data.id
//           data.description
//           projects_table.project_duration_weeks
//           projects_table.session_frequency_per_week
//           projects_table.session_duration_hours
//           projects_table.group_size
//           projects_table.minimum_age
//           projects_table.maximum_age
//         ) : (
//           <li className="">No results found</li>
//         )}
//       </ul>
//     </Link>
//   </div>
// );
export default ProjectCards;
