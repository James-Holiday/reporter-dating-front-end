import React, { Component } from "react"
import NavigationContainer from "../components/home/navigation-container"
import ProfileCardContainer from "../components/home/profile-card-container"
import ProfileCards from "../components/home/profile-card-container"

import aaron from "../mockData"

const Home = props => {
  const renderCards = () => {
    return aaron.map(item => {
      return <ProfileCards item={item} />
    })
  }

  return <div className="home">{renderCards()}</div>
}

export default Home
