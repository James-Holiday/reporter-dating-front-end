import React from "react";
// import Cookie from "js-cookie";

<<<<<<< HEAD
const Auth = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
=======
const Auth = props => {
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    setLoggedIn(true);
=======
    props.successfulLogin();
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  };

  return (
    <div className="app">
<<<<<<< HEAD
      <h1>AUTH PAGE</h1>

      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <div>
          <form onSubmit={() => handleSubmit()}>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
=======
      <h1>Login</h1>

      {props.loggedIn ? null : (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
              placeholder="Username"
            />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
<<<<<<< HEAD
=======
              value={name}
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
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
