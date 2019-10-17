import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import ProfileForm from "./pages/profile-form";
import NavigationContainer from "./components/home/navigation-container";

<<<<<<< HEAD
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
=======
const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const successfulLogin = () => {
    setLoggedIn(true);
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
      </div>
    </BrowserRouter>
  );
};
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2

export default App;
