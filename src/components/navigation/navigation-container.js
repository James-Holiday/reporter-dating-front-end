import React, { Component } from "react";

export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="left-side">
          <div className="logo">Logo goes here...</div>
        </div>
        <div className="right-side">
          <div className="nav-link">Home</div>
          <div className="nav-link">Profile</div>
        </div>
      </div>
    );
  }
}
