import React, { useState, useEffect } from 'react';
import Exercise from './exercise.component';

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
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'><strong>User</strong></div>
            <div className='col-md-3'><strong>Description</strong></div>
            <div className='col-md-3'><strong>Duration</strong></div>
            <div className='col-md-3'><strong>Date</strong></div>
          </div>
            { 
              exercises.map((exercise, index) => (
                <Exercise exercise={exercise} key={index} />
              ))
            }  
        </div>
      )}
    </div>
  )
};

export default ExercisesList;
