import React from 'react';
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import UsersList from './components/users-list.component';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ExerciseList/>} />
          <Route path="edit/:id" element={<EditExercise/>} />
          <Route path="create" element={<CreateExercise/>} />
          <Route path="user" element={<CreateUser/>} />
          <Route path="/users" element={<UsersList/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;