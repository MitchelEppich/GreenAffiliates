import React from "react";

const index = props => {
  return (
    <div>
      <div className="ga-login-wrap ga-login-panel">
        <div className="ga-green-panel">
          <h1>Login</h1>

          <form className="ga-login-form">
            <input
              type="text"
              placeholder="Username"
              style={{ backgroundColor: "transparent" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ backgroundColor: "transparent" }}
            />

            <input
              className="ga-btn ga-login-btn"
              type="submit"
              value="Login"
            />
          </form>

          <div className="ga-loginlink-wrap flex flex-row justify-around">
            <a className="ga-forgot-link" href="./forgot-password.html">
              Forgot Password
            </a>
            <a className="ga-signup-link" href="./signup.html">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
