<<<<<<< HEAD
import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class ProfileCards extends Component {
  constructor(props) {
    super(props)
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileCards extends Component {
  constructor(props) {
    super(props);
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  }

  render() {
    return (
      <Link to={`/profile/${this.props.item.id}`}>
        <div className="profile-card-container">
          <img src={this.props.item.profile_image} alt="img" />
          <div className="meta-data">
            <div className="card-name">{this.props.item.first_name}</div>
          </div>
          <div className="card-description">
            {this.props.item.short_description}
          </div>
        </div>
      </Link>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  }
}
