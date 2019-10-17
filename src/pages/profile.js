import React, { Component } from "react"
import LeftSideBar from "../components/profile/left-side-bar"
import ProfileBody from "../components/profile/profile-body"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page-wrapper">
        <LeftSideBar />
        <ProfileBody />
      </div>
    )
  }
}
