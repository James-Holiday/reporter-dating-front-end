import React from "react";
import { Link } from "react-router-dom";

const NavigationContainer = props => {
  return (
    <div className="navigation-wrapper">
      <div className="left-side">
        <div className="logo">Logo goes here...</div>
      </div>
      <div className="right-side">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NavigationContainer;
