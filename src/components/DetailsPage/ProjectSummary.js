import React from "react";
import Svg from "../Universal/Svg";

const ProjectSummary = () => {
  return (
    <div>
      <div className="what-grid">
        <h2 className="what-grid__title">What you'll do</h2>
        <div className="what-grid__text">project_details</div>
      </div>
      <div className="organisers-grid">
        <h2 className="organisers-grid__title">The Organisers</h2>
        <div className="organisers-grid__text">
          <div className="organisers__text_1">
            <div />
            <div>facebook_url</div>
            <div>twitter_url</div>
            <div>organisation_logo</div>
          </div>
          <div>organisation_details</div>
          <div className="organisers__text_2">
            <div>
              <Svg height="34" width="33" icon="email" />
              <div>email</div>
            </div>

            <div>
              <Svg height="32" width="31" icon="phone" />
              <div>phone</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
