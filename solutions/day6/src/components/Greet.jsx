import React, { useState } from "react";

function Greet(props) {
  const [greetName, setGreetName] = useState("");

  const handleGreetInputChanges = (e) => {
    setGreetName(e.target.value);
  };

  const resetInputField = () => {
    setGreetName("");
  };

  const callGreetFunction = (e) => {
    e.preventDefault();
    props.greet(greetName);
    resetInputField();
  };

  return(
    <form>
      <input
        value={greetName}
        onChange={handleGreetInputChanges}
        type="text"
      />
      <input onClick={callGreetFunction} type="submit" value='GREET' />
    </form>
  )
}

export default Greet;