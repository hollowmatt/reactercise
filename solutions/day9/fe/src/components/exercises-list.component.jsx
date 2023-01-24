import React, { useState, useEffect } from 'react';
import Exercise from './exercise.component';
import { VStack } from '@chakra-ui/react';

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
        <VStack color="white" padding='5px'>
          { 
            exercises.map((exercise, index) => (
              <Exercise exercise={exercise} key={index} />
            ))
          }
        </VStack>  
      )}
    </div>
  )
};

export default ExercisesList;
