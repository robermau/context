import React from 'react';
import User from './components/User';



export const UserContext = React.createContext();

function App() {



const user = {
    name: 'John',
    age: 30,
    isAdmin: true,
  };

  return (
    <UserContext.Provider value={user}>
      <User />
    </UserContext.Provider>
  );
}

export default App



