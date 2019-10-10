import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={{ pathname: "/" }}>
        <img
          src="logo.png"
          className="logo"
          alt="logo"
          data-testid="navbar--logo"
        ></img>
      </Link>
    </>
  );
};

export default Navbar;
