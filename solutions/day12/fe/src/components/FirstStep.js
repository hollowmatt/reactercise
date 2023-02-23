import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

function FirstStep(props){
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form className='input-form' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="col-md-6 offset-md-3">
        <input 
          {...register("first_name")}
          placeholder="Enter your first name"
          autoComplete="off"
        />
        <input
          {...register("last_name")}
          placeholder="Enter your last name"
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

export default FirstStep;