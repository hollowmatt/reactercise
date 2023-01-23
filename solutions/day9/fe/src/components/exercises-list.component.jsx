import React, { useState, useEffect } from 'react';

const EXERCISES_URL = "http://localhost:3030/exercises";

function ExercisesList () {
  const [loading, isLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch(EXERCISES_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setExercises(jsonResponse);
        isLoading(false);
      })
  }, []);

  return(
    <div>
      {loading && !errorMsg ? (
        <span>loading ...</span>
      ) : errorMsg ? (
        <span color="red">{errorMsg}</span>
      ) : (
        exercises.map((exercise, index) => (
          <p>{exercise.description}</p>
        ))
      )}
    </div>
  )
};

export default ExercisesList;