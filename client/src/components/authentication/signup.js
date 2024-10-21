import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./auth.css"; // Assuming you want to use the same styling

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/signup", { username, password })
      .then((res) => {
        window.location = './login'
      })
      .catch((err) => {
        console.error("Error: " + err.response.data.msg);
      });

  };

  return (
    <div className="auth-container">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
          <label>Username: </label><br/>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="auth-form">
          <label>Password: </label><br/>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group"><br/>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          
            <Link to="/login" className="nav-link">
              Already have account login
            </Link>
          
        </div>

      </form>
    </div>
  );
}

export default Signup;
