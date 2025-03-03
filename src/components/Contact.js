import React, { useContext } from 'react';
import UserContext from '../context/UserContext';


const Contact = () => {
  
  const {loggedInUser} = useContext(UserContext)

  return (
    <div>
        <h2>Name: {loggedInUser}</h2>
        <h2>Contact</h2>
        <p>Phone: 1234567890</p>
    </div>
  )
}

export default Contact