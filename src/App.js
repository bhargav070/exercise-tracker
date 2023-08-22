import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises";
import EditExercises from "./components/edit_exercises";
import CreateExercise from "./components/create_exercise";
import CreateUser from "./components/create_user";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercises />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
