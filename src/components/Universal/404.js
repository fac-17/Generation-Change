import React from "react";
import { Link } from "react-router-dom";
const notFound = () => {
  return (
    <div>
      <Link to={{ pathname: "/" }}>
        <h1 className="notfound">404 Page not found</h1>
        <button className="button button--home">Back to Home</button>
      </Link>
    </div>
  );
};

export default notFound;
