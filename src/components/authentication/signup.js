import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Import the CSS file

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Add password state

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password, // Include password in the request
    };

    // Send the user data to the server for signup
    axios
      .post("http://localhost:5000/users/signup", newUser) // Replace with your signup API endpoint
      .then((res) => {
        console.log(res.data);
        // Optionally, you can redirect to another page or perform other actions after a successful signup.
      })
      .catch((err) => {
        console.error("Error: " + err);
      });

    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div className="auth-form">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password" // Use password type for password input
            required
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
