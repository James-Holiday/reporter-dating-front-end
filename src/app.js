import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import Profile from "./pages/profile"
import NavigationContainer from "./components/home/navigation-container"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
