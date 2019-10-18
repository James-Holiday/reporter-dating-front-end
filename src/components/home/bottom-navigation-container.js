import React from "react";
import { Link } from "react-router-dom";

const BottomNavigationContainer = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setLoggedIn(false);
  };


    return (
        <div className="bottom-navigation-wrapper">
            <div className="left-side">
                <div className="logo" id="logo">
                </div>
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
        <div className="logout-btn"></div>
      </div>
    </div>
  );
};

export default BottomNavigationContainer;
