import React, { Component } from "react"
import LeftSideBar from "../components/profile/left-side-bar"
import ProfileBody from "../components/profile/profile-body"
import axios from "axios"

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentId: this.props.match.params.id,
      profileItem: {}
    }

    this.getProfileItem = this.getProfileItem.bind(this)
  }

  getProfileItem() {
    axios
      .get("https://stormy-coast-00785.herokuapp.com/userdatas")
      .then(response => {
        console.log("response from getProfile item", response)
        this.setState({
          profileItem: response.data
        })
      })
      .catch(error => {
        console.log("getProfileItem error", error)
      })
  }

  render() {
    const {
      first_name,
      last_name,
      age,
      short_description
    } = this.state.profileItem

    return (
      <div className="profile-page-wrapper">
        <LeftSideBar />
        <ProfileBody item={this.props.location.state} />
      </div>
    )
  }
}
