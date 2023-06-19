

import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <span className="logo">Login</span>
        <form autoComplete="off">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>
          You don't have account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
