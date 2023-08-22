import React, { useState, useEffect } from "react";
import axios from "axios"; // You need to have axios installed for making HTTP requests

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    axios
      .get("http://localhost:5000/users") // Replace with your API endpoint for fetching users
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUsername(response.data[0].username); // Set the default username to the first user
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

    console.log(exercise);

    // Send the exercise data to the server for saving
    axios
      .post("http://localhost:5000/exercises/add", exercise) 
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

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise</h3>
      <form onSubmit={handleSubmit} className="w-75">
        <div className="form-group mb-3">
          {" "}
          {/* Added margin-bottom for gap */}
          <label className="mb-2">Username: </label>{" "}
          {/* Added margin-bottom for gap */}
          <select
            required
            className="form-control"
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
          {" "}
          {/* Added margin-bottom for gap */}
          <label className="mb-2">Description: </label>{" "}
          {/* Added margin-bottom for gap */}
          <input
            type="text"
            required
            className="form-control"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group mb-3">
          {" "}
          {/* Added margin-bottom for gap */}
          <label className="mb-2">Duration (in minutes): </label>{" "}
          {/* Added margin-bottom for gap */}
          <input
            type="number"
            required
            className="form-control"
            name="duration"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
        <div className="form-group mb-3">
          {" "}
          {/* Added margin-bottom for gap */}
          <label className="mb-2">Date: </label>{" "}
          {/* Added margin-bottom for gap */}
          <div>
            <input
              type="date"
              required
              className="form-control"
              name="date"
              value={date.toISOString().split("T")[0]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="form-group">
          {" "}
          {/* No margin-bottom for the submit button */}
          <button type="submit" className="btn btn-primary">
            Create Exercise
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
