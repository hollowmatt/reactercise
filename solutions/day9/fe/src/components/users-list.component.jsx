import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import User from './user.component';

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
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
          {
            users.map((user, index) => (
              <User user={user} key={index} />
            ))
          }
        </SimpleGrid>
      )}
    </div>
  )
};

export default UsersList;