import React, { useContext } from 'react';
import { UserContext } from '../App.js';

function User() {
  const user = useContext(UserContext);

  return (
    <div className=''>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Is Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default User;