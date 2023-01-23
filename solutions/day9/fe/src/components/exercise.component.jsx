import React from 'react';

function Exercise ({exercise}) {
  return (
    <div className='row'>
      <div className='col-md-3'>{exercise.username}</div>
      <div className='col-md-3'>{exercise.description}</div>
      <div className='col-md-3'>{exercise.duration}</div>
      <div className='col-md-3'>{exercise.date}</div>
    </div>
  )
}

export default Exercise;