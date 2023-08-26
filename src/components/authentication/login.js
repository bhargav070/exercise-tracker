import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Import the CSS file

function Login() {
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

    const user = {
      username,
      password, // Include password in the request
    };

    // Send the user data to the server for login
    axios
      .post("http://localhost:5000/users/login", user) // Replace with your login API endpoint
      .then((res) => {
        console.log(res.data);
        // Optionally, you can redirect to another page or perform other actions after a successful login.
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
      <h3>Login</h3>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
