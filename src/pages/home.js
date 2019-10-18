import React, { Component } from "react";
import ProfileCards from "../components/home/profile-card-container";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      profileItems: []
    };

    this.getProfileItems = this.getProfileItems.bind(this);
  }

  getProfileItems() {
    axios
      .get("https://stormy-coast-00785.herokuapp.com/userdatas")
      .then(response => {
        this.setState({
          profileItems: response.data
        });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  renderCards = () => {
    return this.state.profileItems.map(item => {
      return <ProfileCards item={item} />;
    });
  };

  componentDidMount() {
    this.getProfileItems();
  }

  render() {
    return <div className="home">{this.renderCards()}</div>;
  }
}

export default Home;
