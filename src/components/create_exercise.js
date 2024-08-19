import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"; 

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  }, []);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    
    const token = localStorage.getItem('token');

    // Send the exercise data to the server for saving
    axios.post("http://localhost:5000/exercises/add", exercise , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error: " + err);
      });

    // Reset the form
    setUsername("");
    setDescription("");
    setDuration(0);
    setDate(new Date());

    window.location = "/exercises";
  };

  return (
    <div className="create-exercise-container">
      <h3>Create New Exercise</h3>
      <form onSubmit={handleSubmit} className="exercise-form">
        <div className="form-group mb-3">
          <label className="mb-2">Username: </label>
          <select
            required
            className="form-control input-field"
            name="username"
            value={username}
            onChange={handleUserChange}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Description: </label>
          <input
            type="text"
            required
            className="form-control input-field"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Duration (in minutes): </label>
          <input
            type="number"
            required
            className="form-control input-field"
            name="duration"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Date: </label>
          <div>
            <input
              type="date"
              required
              className="form-control input-field"
              name="date"
              value={date.toISOString().split("T")[0]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn submit-button">
            Create Exercise
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;