import React from "react";
import Svg from "../Universal/Svg";

const ProjectSummary = ({ detailsData }) => {
  if (!detailsData) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="project-long-summary">
      <div className="what">
        <h2 className="what__title">What you'll do</h2>
        <div className="what__text">{detailsData.fields.project_details}</div>
      </div>
      <div className="organisers">
        <h2 className="organisers__title">The Organisers</h2>
        <div className="organisers__text">
          <div className="organisers__socialmedia">
            <h2 className="oranisers__socialmedia--name">Hemsworth Park</h2>
            <div className="organisers__socialmedia--logos">
              <a href={detailsData.fields.facebook_url}>
                <Svg height="34" width="33" icon="facebook" />
              </a>
              <a href={detailsData.fields.twitter_url}>
                <Svg height="34" width="33" icon="twitter" />
              </a>
              <img src={detailsData.fields.organisation_logo} />
            </div>
          </div>
          <div>{detailsData.fields.organisation_details}</div>
          <div className="organisers__contact">
            <div>
              <Svg height="32" width="31" icon="website" />
              <div>{detailsData.fields.website}</div>
            </div>

            <div>
              <Svg height="34" width="33" icon="email" />
              <div>{detailsData.fields.email}</div>
            </div>

            <div>
              <Svg height="32" width="31" icon="phone" />
              <div>{detailsData.fields.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
