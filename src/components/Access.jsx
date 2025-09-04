import React from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext() 

const Access = () => {
  const user = useContext(UserContext)
  return (
    
    <UserContext.Provider value={{ name: 'John Doe', role: 'Admin' }}>
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>Your role is: {user.role}</p>
      </div>
    </UserContext.Provider>
  )
}

export default Access