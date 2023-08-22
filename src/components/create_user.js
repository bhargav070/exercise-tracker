import React, { useState } from "react";
import axios from "axios"; // You need to have axios installed for making HTTP requests

function CreateUser() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
    };

    // Send the user data to the server for saving
    axios
      .post("http://localhost:5000/users/add", newUser) // Replace with your API endpoint
      .then((res) => {
        console.log(res.data);
        // Optionally, you can redirect to another page or perform other actions after a successful submission.
      })
      .catch((err) => {
        console.error("Error: " + err);
      });

    // Reset the form
    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label><br/>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group"><br/>
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
