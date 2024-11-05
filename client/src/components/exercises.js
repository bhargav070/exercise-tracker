import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <button className="edit-button">
          <Link className="edit_link" to={"/edit/" + props.exercise._id}>Edit</Link>
        </button>
        <button className="delete-button" onClick={() => { props.deleteExercise(props.exercise._id) }}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Fetch exercises with token in headers
    axios.get(`${process.env.REACT_APP_API_URL}/exercises`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    const token = localStorage.getItem('token');

    axios.delete(`${process.env.REACT_APP_API_URL}/exercises/` + id, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        setExercises(exercises.filter(el => el._id !== id));
      })
      .catch((error) => {
        console.log("delete error");
        console.log(error);
      });
  };

  const exerciseList = () => {
    return exercises.map(currentExercise => {
      return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />;
    });
  };

  return (
    <div className="exercise-list-container">
      <h3 className="exercise-list-heading">Logged Exercises</h3>
      <table className="exercise-list-table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
