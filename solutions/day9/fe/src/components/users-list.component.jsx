import React, { useState, useEffect } from 'react';

const USERS_URL = "http://localhost:3030/users";

function UsersList () {
  const [loading, isLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setUsers(jsonResponse);
        isLoading(false);
      })
  }, []);

  return(
    <div>
      {loading && !errorMsg ? (
        <span>loading...</span>
      ) : errorMsg ? (
        <span color="red">{errorMsg}</span>
      ) : (
        users.map((user, index) => (
          <p key={index}>
            {user.username}, {user.name}, {user.location}</p>
        ))
      )}
    </div>
  )
};

export default UsersList;