import React, { useState, useEffect } from 'react';
import Exercise from './exercise.component';
import { VStack, Container, Heading } from '@chakra-ui/react';

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
        <div>
          <Heading margin="10px"> Exercise Feed </Heading>
          <VStack color="white" padding='5px'>
            <Container maxW="800px">
              { 
                exercises.map((exercise, index) => (
                  <Exercise exercise={exercise} key={index}/>
                ))
              }
            </Container>
          </VStack>  
        </div>
      )}
    </div>
  )
};

export default ExercisesList;
