import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class ProfileCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to={`/profile/${this.props.item.id}`}>
        <div className="profile-card-container">
          <img src={this.props.item.cardImgUrl} alt="img" />
          <div className="meta-data">
            <div className="card-name">{this.props.item.name}</div>
          </div>
          <div className="card-description">{this.props.item.description}</div>
        </div>
      </Link>
    )
  }
}
