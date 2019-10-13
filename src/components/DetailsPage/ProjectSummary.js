import React from "react";
import Svg from "../Universal/Svg";

const ProjectSummary = () => {
  return (
    <div>
      <div className="flexy">
        <h2 className="flexy1">What you'll do</h2>
        <div className="flexy2">project_details</div>
      </div>
      <div className="organisers">
        <h2 className="organisers__title">The Organisers</h2>
        <div className="organisers__wrap">
          <div className="organisers__wrap_1">
            <div />
            <div>facebook_url</div>
            <div>twitter_url</div>
            <div>organisation_logo</div>
          </div>
          <div>organisation_details</div>
          <div className="organisers__wrap_2">
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
