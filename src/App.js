import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises";
import EditExercises from "./components/edit_exercises";
import CreateExercise from "./components/create_exercise";
import Home from "./components/home";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/exercises" element={<ExercisesList />} />
            <Route path="/edit/:id" element={<EditExercises />} />
            <Route path="/create-exercise" element={<CreateExercise />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
