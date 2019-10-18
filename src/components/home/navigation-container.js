import React from "react";
import { Link } from "react-router-dom";

const NavigationContainer = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setLoggedIn(false);
  };

  return (
    <div className="navigation-wrapper">
      <div className="left-side">
        <div className="logo">Logo goes here...</div>
      </div>
      <div className="right-side">
        <Link to="/" className="link">
          Home
        </Link>

        <div>
          {props.loggedIn ? (
            <Link to="/profile-form" className="link">
              Add Profile
            </Link>
          ) : null}
        </div>
        <div>
          {props.loggedIn ? (
            <div className="logout-btn">
              <a onClick={e => handleLogout(e)}>Logout</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
