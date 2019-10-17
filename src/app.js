import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import ProfileForm from "./pages/profile-form";
import NavigationContainer from "./components/home/navigation-container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/profile-form" component={ProfileForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
