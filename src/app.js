import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import ProfileForm from "./pages/profile-form";
import NavigationContainer from "./components/home/navigation-container";
import BottomNavigationContainer from "./components/home/bottom-navigation-container";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const successfulLogin = () => {
    setLoggedIn(true);
    console.log("WE ARE WORKING TO THIS POINT");
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavigationContainer loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/auth"
            render={props => (
              <Auth
                {...props}
                loggedIn={loggedIn}
                successfulLogin={successfulLogin}
              />
            )}
          />
          <Route path="/profile/:id" component={Profile} />
          <Route
            path="/profile-form"
            render={props => <ProfileForm {...props} loggedIn={loggedIn} />}
          />
        </Switch>
        <BottomNavigationContainer
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
