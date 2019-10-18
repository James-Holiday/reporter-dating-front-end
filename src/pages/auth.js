import React from "react";
import { Link } from "react-router-dom";
// import Cookie from "js-cookie";

const Auth = props => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.successfulLogin();
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>

      {props.loggedIn ? null : (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="Username"
            />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={name}
              placeholder="Password"
            />
            <div>
              <Link to="/">
                <button className="btn" type="submit">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
