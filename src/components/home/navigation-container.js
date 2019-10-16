import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NavigationContainer extends Component {
  render() {
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
    )
  }
}
