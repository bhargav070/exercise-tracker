import React, {useState, useEffect} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";



function Navbar() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);


  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        ExerciseTracker
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/exercises" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-exercise" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
        </ul>

        {!isAuthenticated ? (
          <div className="navbar-btn">
          <button className="navbar-item btn btn-outline-primary">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </button>
        </div>) :

        (<div className="navbar-btn">
          <button className="btn btn-outline-danger logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>)}
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
