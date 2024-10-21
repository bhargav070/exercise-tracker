import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL_DEPLOYED}/auth/login`, { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location = "/exercises";
      })
      .catch((err) => {
        console.error("Error: " + err.response.data.msg);
      });
  };

  return (
    <div className="auth-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
          <label>Username: </label><br />
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="auth-form">
          <label>Password: </label><br />
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group"><br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
