import React from "react";
import { Link } from "react-router-dom";

const BottomNavigationContainer = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setLoggedIn(false);
  };

  return (
    <div className="navigation-wrapper">
      <div className="bottom-left-side">
        <div className="bottom-logo">Logo goes here...</div>
      </div>
      <div className="bottom-right-side">
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
        <div className="bottom-logout-btn">
          {props.loggedIn ? (
            <div>
              <button onClick={e => handleLogout(e)}>Logout</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationContainer;
