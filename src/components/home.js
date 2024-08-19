import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Exercise Tracker</h1>
      <p>Track your exercises and stay fit!</p>
      <div className="home-links">
        <Link to="/create-exercise" className="btn btn-primary">
          Create Exercise
        </Link>
        <Link to="/exercises" className="btn btn-primary">
          View Exercises
        </Link>
        <Link to="/login" className="btn btn-primary">
          login
        </Link>
      </div>
    </div>
  );
}

export default Home;
