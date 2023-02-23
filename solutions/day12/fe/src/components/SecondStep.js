import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

function SecondStep(props){
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form className='input-form' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="col-md-6 offset-md-3">
        <input 
          {...register("email")}
          placeholder="Enter your email address"
          type='email'
          autoComplete="off"
        />
        <input
          {...register("password")}
          placeholder="Choose a password"
          type='password'
          autoComplete="off"
        />
        <input type="submit" />
      </div>
      <div className='dot-box'>
        {data}
      </div>
    </form>
  );
};

export default SecondStep;