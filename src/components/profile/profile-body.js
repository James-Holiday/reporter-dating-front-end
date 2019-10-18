import React, { Component } from "react";
import axios from "axios";

export default class ProfileBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.currentId,
      profileItem: {}
    };
  }

  getProfileItem() {
    axios
      .get(
        `https://stormy-coast-00785.herokuapp.com/userdata/${this.state.currentId}`
      )
      .then(response => {
        this.setState({
          profileItem: response.data
        });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  componentDidMount() {
    this.getProfileItem();
  }

  render() {
    const {
      first_name,
      last_name,
      age,
      short_description,
      sub_heading,
      headline,
      description_one,
      description_two,
      facebook,
      instagram,
      twitter,
      job_site,
      article_image,
      profile_image,
      body_image_one,
      body_image_two
    } = this.state.profileItem;

    return (
      <div className="profile-body-wrapper">
        <img src={article_image} alt="" />
        <img src={profile_image} alt="" />
        <img src={body_image_one} alt="" />
        <img src={body_image_two} alt="" />
        <div>{first_name}</div>
        <div>{last_name}</div>
        <div>{age}</div>
        <div>{short_description}</div>
        <div>{sub_heading}</div>
        <div>{headline}</div>
        <div>{description_one}</div>
        <div>{description_two}</div>
        <div>{facebook}</div>
        <div>{instagram}</div>
        <div>{twitter}</div>
        <div>{job_site}</div>
      </div>
    );
  }
}
