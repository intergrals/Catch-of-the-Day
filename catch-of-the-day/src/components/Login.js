import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to access and manage store inventory.</p>
    <button className="google" onClick={() => props.authenticate("Google")}>
      Log in with Google
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log in with Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Log in with Twitter
    </button>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log in with Github
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
