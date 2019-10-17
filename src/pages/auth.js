import React from "react";
// import Cookie from "js-cookie";

const Auth = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="app">
      <h1>AUTH PAGE</h1>

      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <div>
          <form onSubmit={() => handleSubmit()}>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
