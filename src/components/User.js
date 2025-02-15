import React, { useState } from 'react'

const User = ({name}) => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(1)
  return (
    <div className='user-card'>
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshay008</h4>
    </div>
  )
}

export default User